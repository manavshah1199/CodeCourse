from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
import json
import hashlib
import secrets
import datetime

app = Flask(__name__)
CORS(app)

# Simple in-memory storage for users (in production, use a database)
users = {}
tokens = {}  # Store active tokens

# Load OpenAI API key from config.json
try:
    with open('config.json', 'r') as config_file:
        config = json.load(config_file)
        api_key = config.get("OPENAI_API_KEY", "")
        os.environ["OPENAI_API_KEY"] = api_key
        openai.api_key = api_key
        print(f"✅ OpenAI API key loaded (length: {len(api_key)})")
        if not api_key:
            print("⚠️  API key is empty!")
except FileNotFoundError:
    print("⚠️  config.json not found. Please create it with your OpenAI API key.")
    os.environ["OPENAI_API_KEY"] = ""
except json.JSONDecodeError:
    print("⚠️  Invalid JSON in config.json. Please check the format.")
    os.environ["OPENAI_API_KEY"] = ""

# Authentication helper functions
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def generate_token():
    return secrets.token_urlsafe(32)

def verify_token(token):
    if token in tokens:
        user_email = tokens[token]
        if user_email in users:
            return user_email
    return None

# Authentication endpoints
@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        name = data.get('name', '').strip()
        email = data.get('email', '').strip().lower()
        password = data.get('password', '')
        age_group = data.get('ageGroup', '')
        
        # Validation
        if not name or len(name) < 2:
            return jsonify({'message': 'Name must be at least 2 characters long'}), 400
        
        if not email or '@' not in email:
            return jsonify({'message': 'Please enter a valid email address'}), 400
        
        if len(password) < 6:
            return jsonify({'message': 'Password must be at least 6 characters long'}), 400
        
        if not age_group:
            return jsonify({'message': 'Please select an age group'}), 400
        
        # Check if user already exists
        if email in users:
            return jsonify({'message': 'An account with this email already exists'}), 409
        
        # Create user
        hashed_password = hash_password(password)
        users[email] = {
            'name': name,
            'email': email,
            'password': hashed_password,
            'age_group': age_group,
            'created_at': datetime.datetime.now().isoformat(),
            'progress': {
                'python': 0,
                'java': 0,
                'html': 0,
                'css': 0
            }
        }
        
        print(f"✅ New user registered: {email}")
        return jsonify({'message': 'Account created successfully!'}), 201
        
    except Exception as e:
        print(f"❌ Signup error: {e}")
        return jsonify({'message': 'Server error. Please try again.'}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get('email', '').strip().lower()
        password = data.get('password', '')
        
        # Validation
        if not email or not password:
            return jsonify({'message': 'Please provide email and password'}), 400
        
        # Check if user exists
        if email not in users:
            return jsonify({'message': 'Invalid email or password'}), 401
        
        # Verify password
        hashed_password = hash_password(password)
        if users[email]['password'] != hashed_password:
            return jsonify({'message': 'Invalid email or password'}), 401
        
        # Generate token
        token = generate_token()
        tokens[token] = email
        
        # Return user data (without password)
        user_data = {
            'name': users[email]['name'],
            'email': users[email]['email'],
            'age_group': users[email]['age_group'],
            'progress': users[email]['progress']
        }
        
        print(f"✅ User logged in: {email}")
        return jsonify({
            'message': 'Login successful!',
            'user': user_data,
            'token': token
        }), 200
        
    except Exception as e:
        print(f"❌ Login error: {e}")
        return jsonify({'message': 'Server error. Please try again.'}), 500

@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    try:
        data = request.get_json()
        email = data.get('email', '').strip().lower()
        
        if not email or '@' not in email:
            return jsonify({'message': 'Please enter a valid email address'}), 400
        
        if email not in users:
            # Don't reveal if email exists or not for security
            return jsonify({'message': 'If an account exists with this email, a reset link has been sent.'}), 200
        
        # In a real application, you would send an email here
        # For demo purposes, we'll just return success
        print(f"📧 Password reset requested for: {email}")
        return jsonify({'message': 'If an account exists with this email, a reset link has been sent.'}), 200
        
    except Exception as e:
        print(f"❌ Forgot password error: {e}")
        return jsonify({'message': 'Server error. Please try again.'}), 500

@app.route('/logout', methods=['POST'])
def logout():
    try:
        data = request.get_json()
        token = data.get('token', '')
        
        if token in tokens:
            del tokens[token]
            print(f"✅ User logged out")
        
        return jsonify({'message': 'Logged out successfully'}), 200
        
    except Exception as e:
        print(f"❌ Logout error: {e}")
        return jsonify({'message': 'Server error. Please try again.'}), 500

@app.route('/ai-tutor', methods=['POST'])
def handle_ai_tutor():
    try:
        data = request.get_json()
        user_input = data.get('user_input', '').strip()

        if not user_input:
            return jsonify({'reply': 'Please enter a message so I can help you! 😊'}), 400

        print(f"🤖 Processing: {user_input}")
        print(f"🔑 API Key available: {bool(openai.api_key)}")

        # Send prompt to OpenAI using the new API format
        client = openai.OpenAI(api_key=openai.api_key)
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": (
                    "You are CodeSpark, a friendly AI coding tutor for kids and teens. "
                    "Keep responses SHORT and SIMPLE - 2-3 sentences max! "
                    "Use simple words and emojis. Be encouraging but brief. "
                    "Focus on one concept at a time. "
                    "Example responses: "
                    "'Python is fun! 🐍 Start with: print(\"Hello World!\")' "
                    "'Variables store data! 📦 Try: name = \"Alex\"' "
                    "'Loops repeat code! 🔄 for i in range(3): print(i)' "
                    "Keep it super simple and engaging! 🌟"
                )},
                {"role": "user", "content": user_input}
            ],
            temperature=0.7,
            max_tokens=1500
        )

        reply = response.choices[0].message.content
        print(f"✅ OpenAI response: {reply[:100]}...")
        return jsonify({'reply': reply})

    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({'reply': f'Sorry! Something went wrong. 😅 Error: {str(e)}'}), 500

@app.route('/')
def home():
    return "CodeSpark AI Tutor Backend is running!"

if __name__ == '__main__':
    print("🚀 Starting CodeSpark AI Tutor Backend...")
    app.run(host='0.0.0.0', port=5000, debug=True)
