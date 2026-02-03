const API_BASE = window.location.origin.startsWith('http')
  ? `${window.location.protocol}//${window.location.hostname}:5000`
  : 'http://localhost:5000';

// Authentication functions
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
        // User is logged in
        const userData = JSON.parse(user);
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-info').style.display = 'inline';
        document.getElementById('login-link').style.display = 'none';
    } else {
        // User is not logged in
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('login-link').style.display = 'inline';
    }
}

function logout() {
    const token = localStorage.getItem('token');
    
    // Call logout endpoint
    if (token) {
        fetch(`${API_BASE}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        }).catch(error => {
            console.error('Logout error:', error);
        });
    }
    
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Update UI
    checkAuthStatus();
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// Sample project gallery data


const projects = [
  {
    title: "Snake Game",
    description: "Classic snake game built with Python and Pygame",
    author: "Alex Chen",
    language: "Python",
    image: "🐍"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with beautiful UI",
    author: "Sarah Kim",
    language: "JavaScript",
    image: "🌤️"
  },
  {
    title: "Calculator",
    description: "Advanced calculator with scientific functions",
    author: "Mike Johnson",
    language: "Java",
    image: "🧮"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio with animations",
    author: "Emma Davis",
    language: "HTML/CSS",
    image: "💼"
  }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  checkAuthStatus(); // Check authentication status
  loadProjectGallery();
  setupCourseInteractions();
  setupChatFunctionality();
});

// Load project gallery
function loadProjectGallery() {
  const gallery = document.getElementById('project-gallery');
  if (!gallery) return;

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-icon">${project.image}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-meta">
        <span class="language">${project.language}</span>
        <span class="author">by ${project.author}</span>
      </div>
    `;
    gallery.appendChild(projectCard);
  });
}

// Setup course interactions
function setupCourseInteractions() {
  const courses = document.querySelectorAll('.course');
  courses.forEach(course => {
    course.addEventListener('click', function() {
      const courseId = this.id;
      startCourse(courseId);
    });
  });
}

// Start learning function
function startLearning() {
  alert('Welcome to CodeSpark! 🎉\n\nChoose a course to begin your coding journey.');
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

// Start specific course
function startCourse(courseId) {
  const courseNames = {
    python: 'Python',
    java: 'Java',
    scratch: 'Scratch/Blocks',
    html: 'HTML'
  };
  
  const courseName = courseNames[courseId] || 'Programming';
  
  alert(`Starting ${courseName} course! 🚀\n\nThis feature is coming soon. For now, try the AI Tutor below!`);
  document.getElementById('ai-tutor').scrollIntoView({ behavior: 'smooth' });
}

// Setup chat functionality
function setupChatFunctionality() {
  const userInput = document.getElementById('user-input');
  const sendButton = document.querySelector('#ai-tutor button');
  
  if (userInput) {
    userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
  }
}

// Send message to AI tutor (uses real backend)
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatLog = document.getElementById('chat-log');
  
  if (!userInput || !chatLog) return;
  
  const message = userInput.value.trim();
  if (!message) return;
  
  addMessageToChat('user', message);
  userInput.value = '';

  // 🔁 Fetch real-time AI response from Autogen Python backend
  fetch(`${API_BASE}/ai-tutor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_input: message })
  })
    .then(res => res.json())
    .then(data => {
      addMessageToChat('ai', data.reply);
    })
    .catch(err => {
      console.error(err);
      addMessageToChat('ai', 'Oops! Something went wrong. Try again later.');
    });
}

// Add message to chat
function addMessageToChat(sender, message) {
  const chatLog = document.getElementById('chat-log');
  if (!chatLog) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML = `
    <div class="message-content">
      <strong>${sender === 'user' ? 'You' : 'AI Tutor'}:</strong>
      <p>${message}</p>
    </div>
  `;
  
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Add some CSS for the chat messages
const style = document.createElement('style');
style.textContent = `
  .message {
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
  }
  
  .user-message {
    background: #667eea;
    color: white;
    margin-left: 20%;
  }
  
  .ai-message {
    background: #f0f0f0;
    color: #333;
    margin-right: 20%;
  }
  
  .project-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    border-radius: 15px;
    margin: 1rem;
    text-align: center;
    transition: transform 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .project-card:hover {
    transform: translateY(-3px);
  }
  
  .project-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .project-meta {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
  }
  
  .language {
    background: #667eea;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
  }
  
  #project-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
document.head.appendChild(style);
