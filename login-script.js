// Form switching functionality
function showLogin() {
    hideAllForms();
    document.getElementById('loginForm').classList.add('active');
    updateToggleButtons('login');
}

function showSignup() {
    hideAllForms();
    document.getElementById('signupForm').classList.add('active');
    updateToggleButtons('signup');
}

function showForgotPassword() {
    hideAllForms();
    document.getElementById('forgotForm').classList.add('active');
    updateToggleButtons('forgot');
}

function hideAllForms() {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.classList.remove('active'));
}

function updateToggleButtons(activeForm) {
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (activeForm === 'login') {
        buttons[0].classList.add('active');
    } else if (activeForm === 'signup') {
        buttons[1].classList.add('active');
    }
}

// Form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateName(name) {
    return name.trim().length >= 2;
}

// Show/hide messages
function showMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the form container
    const formContainer = document.querySelector('.form-container');
    formContainer.insertBefore(messageDiv, formContainer.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Loading state
function setLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.textContent = '';
    } else {
        button.classList.remove('loading');
        button.textContent = button.dataset.originalText || 'Submit';
    }
}

// Login form handling
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const submitBtn = this.querySelector('.submit-btn');
    
    // Validation
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showMessage('Password must be at least 6 characters long.', 'error');
        return;
    }
    
    // Set loading state
    submitBtn.dataset.originalText = submitBtn.textContent;
    setLoading(submitBtn, true);
    
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Login successful! Redirecting...', 'success');
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            
            // Redirect to main application after 1 second
            setTimeout(() => {
                window.location.href = 'codecourse.html';
            }, 1000);
        } else {
            showMessage(data.message || 'Login failed. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage('Connection error. Please try again.', 'error');
    } finally {
        setLoading(submitBtn, false);
    }
});

// Signup form handling
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const submitBtn = this.querySelector('.submit-btn');
    
    // Validation
    if (!validateName(name)) {
        showMessage('Please enter your full name (at least 2 characters).', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showMessage('Password must be at least 6 characters long.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match.', 'error');
        return;
    }
    
    if (!ageGroup) {
        showMessage('Please select your age group.', 'error');
        return;
    }
    
    // Set loading state
    submitBtn.dataset.originalText = submitBtn.textContent;
    setLoading(submitBtn, true);
    
    try {
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name, 
                email, 
                password, 
                ageGroup 
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Account created successfully! Please log in.', 'success');
            // Switch to login form
            setTimeout(() => {
                showLogin();
                // Clear signup form
                this.reset();
            }, 2000);
        } else {
            showMessage(data.message || 'Signup failed. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Signup error:', error);
        showMessage('Connection error. Please try again.', 'error');
    } finally {
        setLoading(submitBtn, false);
    }
});

// Forgot password form handling
document.getElementById('forgotForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('forgotEmail').value.trim();
    const submitBtn = this.querySelector('.submit-btn');
    
    // Validation
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Set loading state
    submitBtn.dataset.originalText = submitBtn.textContent;
    setLoading(submitBtn, true);
    
    try {
        const response = await fetch('http://localhost:5000/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Password reset email sent! Check your inbox.', 'success');
            // Switch back to login form after 2 seconds
            setTimeout(() => {
                showLogin();
                this.reset();
            }, 2000);
        } else {
            showMessage(data.message || 'Failed to send reset email. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Forgot password error:', error);
        showMessage('Connection error. Please try again.', 'error');
    } finally {
        setLoading(submitBtn, false);
    }
});

// Check if user is already logged in
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
        // User is logged in, redirect to main app
        window.location.href = 'codecourse.html';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    
    // Add smooth transitions
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});
