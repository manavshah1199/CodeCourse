// Scratch/Blocks Course Script
let currentLesson = 0;
let completedLessons = [];
let currentScript = [];

// Scratch/Blocks Course Lessons
const scratchLessons = [
    {
        id: 1,
        title: "Welcome to Scratch!",
        content: `
            <h3>🎮 Welcome to Visual Programming!</h3>
            <p>Scratch is a visual programming language that makes coding fun and easy. Instead of typing code, you'll drag and drop colorful blocks to create programs!</p>
            
            <div class="code-example">
                <strong>What you'll learn:</strong>
                <ul>
                    <li>🧩 Drag and drop blocks to build scripts</li>
                    <li>🎯 Control sprites (characters) on the stage</li>
                    <li>🎨 Create animations and games</li>
                    <li>🔊 Add sounds and effects</li>
                </ul>
            </div>
            
            <p><strong>Ready to start building?</strong> Click "Start Learning!" to begin your first lesson!</p>
        `,
        exercise: null
    },
    {
        id: 2,
        title: "Moving Your Sprite",
        content: `
            <h3>🚀 Lesson 1: Making Things Move</h3>
            <p>In Scratch, we control characters called "sprites" using blocks. Let's start by making our cat sprite move!</p>
            
            <div class="code-example">
                <strong>Motion Blocks:</strong>
                <ul>
                    <li><span style="color: #4ECDC4;">■</span> <strong>move 10 steps</strong> - Moves the sprite forward</li>
                    <li><span style="color: #4ECDC4;">■</span> <strong>turn 15 degrees</strong> - Rotates the sprite</li>
                    <li><span style="color: #4ECDC4;">■</span> <strong>go to x: 0 y: 0</strong> - Moves to a specific position</li>
                </ul>
            </div>
            
            <p><strong>Try it:</strong> Drag a "move 10 steps" block to the script area and click "Run Script" to see your sprite move!</p>
        `,
        exercise: {
            title: "Make the cat move 20 steps",
            description: "Drag a motion block to make the cat move forward",
            hint: "Look for the blue motion blocks in the palette",
            solution: ["move"]
        }
    },
    {
        id: 3,
        title: "Control Blocks",
        content: `
            <h3>🎛️ Lesson 2: Controlling Your Program</h3>
            <p>Control blocks tell your program when and how many times to run. They're like the conductor of an orchestra!</p>
            
            <div class="code-example">
                <strong>Control Blocks:</strong>
                <ul>
                    <li><span style="color: #FFE66D;">■</span> <strong>when flag clicked</strong> - Starts the program</li>
                    <li><span style="color: #FFE66D;">■</span> <strong>repeat 10</strong> - Repeats actions multiple times</li>
                    <li><span style="color: #FFE66D;">■</span> <strong>wait 1 seconds</strong> - Pauses the program</li>
                </ul>
            </div>
            
            <p><strong>Try it:</strong> Start with "when flag clicked", then add "move 10 steps" to make the cat move when you click the green flag!</p>
        `,
        exercise: {
            title: "Create a moving animation",
            description: "Use control blocks to make the cat move repeatedly",
            hint: "Start with 'when flag clicked' and add a 'repeat' block",
            solution: ["when-flag", "repeat", "move"]
        }
    },
    {
        id: 4,
        title: "Looks and Effects",
        content: `
            <h3>🎨 Lesson 3: Making It Look Good</h3>
            <p>Looks blocks control how your sprite appears on the stage. You can make it talk, change colors, and more!</p>
            
            <div class="code-example">
                <strong>Looks Blocks:</strong>
                <ul>
                    <li><span style="color: #FF6B6B;">■</span> <strong>say Hello!</strong> - Makes the sprite speak</li>
                    <li><span style="color: #FF6B6B;">■</span> <strong>change color effect by 25</strong> - Changes the sprite's color</li>
                </ul>
            </div>
            
            <p><strong>Try it:</strong> Add a "say" block to make your cat greet you when the program starts!</p>
        `,
        exercise: {
            title: "Make the cat talk",
            description: "Add a looks block to make the sprite say something",
            hint: "Look for the purple looks blocks",
            solution: ["when-flag", "say"]
        }
    },
    {
        id: 5,
        title: "Adding Sound",
        content: `
            <h3>🔊 Lesson 4: Sound Effects</h3>
            <p>Sound blocks add audio to your projects. Make your sprite meow, play music, or add sound effects!</p>
            
            <div class="code-example">
                <strong>Sound Blocks:</strong>
                <ul>
                    <li><span style="color: #A8E6CF;">■</span> <strong>play sound meow</strong> - Plays a sound effect</li>
                </ul>
            </div>
            
            <p><strong>Try it:</strong> Add a sound block to make your cat meow when it moves!</p>
        `,
        exercise: {
            title: "Add sound to your program",
            description: "Include a sound block in your script",
            hint: "Look for the green sound blocks",
            solution: ["when-flag", "play-sound"]
        }
    },
    {
        id: 6,
        title: "Building a Simple Game",
        content: `
            <h3>🎮 Lesson 5: Your First Game!</h3>
            <p>Now let's combine everything to create a simple game! We'll make the cat move around and make sounds.</p>
            
            <div class="code-example">
                <strong>Game Recipe:</strong>
                <ol>
                    <li>Start with "when flag clicked"</li>
                    <li>Add "repeat 10" to loop</li>
                    <li>Inside the repeat: "move 10 steps"</li>
                    <li>Add "wait 1 seconds" for timing</li>
                    <li>Add "play sound meow" for fun!</li>
                </ol>
            </div>
            
            <p><strong>Challenge:</strong> Try building this complete program using the blocks!</p>
        `,
        exercise: {
            title: "Build a complete game script",
            description: "Create a script that combines control, motion, and sound blocks",
            hint: "Use multiple block types together",
            solution: ["when-flag", "repeat", "move", "wait", "play-sound"]
        }
    },
    {
        id: 7,
        title: "Advanced Motion",
        content: `
            <h3>🔄 Lesson 6: Advanced Movement</h3>
            <p>Let's learn more advanced motion techniques to make your sprite move in interesting ways!</p>
            
            <div class="code-example">
                <strong>Advanced Motion:</strong>
                <ul>
                    <li>Use "turn" blocks to change direction</li>
                    <li>Combine "move" and "turn" for curved paths</li>
                    <li>Use "go to" to jump to specific positions</li>
                </ul>
            </div>
            
            <p><strong>Try it:</strong> Make the cat move in a square pattern by combining move and turn blocks!</p>
        `,
        exercise: {
            title: "Create a square movement pattern",
            description: "Use move and turn blocks to make the sprite move in a square",
            hint: "Move forward, then turn 90 degrees, repeat 4 times",
            solution: ["when-flag", "repeat", "move", "turn"]
        }
    },
    {
        id: 8,
        title: "Project: Dancing Cat",
        content: `
            <h3>💃 Final Project: Dancing Cat Animation</h3>
            <p>Let's create a fun dancing animation using all the skills you've learned!</p>
            
            <div class="code-example">
                <strong>Dancing Cat Recipe:</strong>
                <ol>
                    <li>Start with "when flag clicked"</li>
                    <li>Add "repeat 20" for the dance loop</li>
                    <li>Inside: "move 5 steps"</li>
                    <li>Add "turn 18 degrees" (for a full spin)</li>
                    <li>Add "change color effect by 25"</li>
                    <li>Add "wait 0.5 seconds"</li>
                    <li>Add "play sound meow" every few steps</li>
                </ol>
            </div>
            
            <p><strong>Challenge:</strong> Build this dancing animation and watch your cat spin and change colors!</p>
        `,
        exercise: {
            title: "Create the dancing cat animation",
            description: "Build a complex script with multiple block types",
            hint: "Use all the block categories: control, motion, looks, and sound",
            solution: ["when-flag", "repeat", "move", "turn", "change-color", "wait", "play-sound"]
        }
    }
];

// Initialize the course
document.addEventListener('DOMContentLoaded', function() {
    loadLessons();
    setupDragAndDrop();
    checkAuthStatus();
});

function loadLessons() {
    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';
    
    scratchLessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item';
        if (index === currentLesson) lessonItem.classList.add('active');
        if (completedLessons.includes(lesson.id)) lessonItem.classList.add('completed');
        
        lessonItem.innerHTML = `
            <strong>${lesson.title}</strong>
            <br><small>Lesson ${index + 1}</small>
        `;
        
        lessonItem.onclick = () => loadLesson(index);
        lessonList.appendChild(lessonItem);
    });
}

function startCourse() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('block-section').style.display = 'block';
    loadLesson(0);
}

function loadLesson(lessonIndex) {
    currentLesson = lessonIndex;
    const lesson = scratchLessons[lessonIndex];
    
    // Update lesson navigation
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === lessonIndex) item.classList.add('active');
    });
    
    // Load lesson content
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = lesson.content;
    
    // Show exercise if available
    if (lesson.exercise) {
        loadExercise(lesson.exercise);
    } else {
        document.getElementById('exercise-section').style.display = 'none';
    }
    
    // Update progress
    updateProgress();
}

function loadExercise(exercise) {
    const exerciseSection = document.getElementById('exercise-section');
    const exerciseContent = document.getElementById('exercise-content');
    
    exerciseContent.innerHTML = `
        <h4>${exercise.title}</h4>
        <p>${exercise.description}</p>
    `;
    
    exerciseSection.style.display = 'block';
}

function setupDragAndDrop() {
    const blocks = document.querySelectorAll('.block');
    const scriptContainer = document.getElementById('script-container');
    
    blocks.forEach(block => {
        block.addEventListener('dragstart', handleDragStart);
    });
    
    scriptContainer.addEventListener('dragover', handleDragOver);
    scriptContainer.addEventListener('drop', handleDrop);
    scriptContainer.addEventListener('dragenter', handleDragEnter);
    scriptContainer.addEventListener('dragleave', handleDragLeave);
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.block);
    e.target.style.opacity = '0.5';
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.closest('.script-container').classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.closest('.script-container').classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    const scriptContainer = e.target.closest('.script-container');
    scriptContainer.classList.remove('drag-over');
    
    const blockType = e.dataTransfer.getData('text/plain');
    addBlockToScript(blockType);
    
    // Reset dragged block opacity
    document.querySelectorAll('.block').forEach(block => {
        block.style.opacity = '1';
    });
}

function addBlockToScript(blockType) {
    const scriptContainer = document.getElementById('script-container');
    const dropHint = scriptContainer.querySelector('.drop-hint');
    
    if (dropHint) {
        dropHint.remove();
    }
    
    const blockElement = createBlockElement(blockType);
    scriptContainer.appendChild(blockElement);
    currentScript.push(blockType);
}

function createBlockElement(blockType) {
    const block = document.createElement('div');
    block.className = 'block';
    block.dataset.block = blockType;
    
    let blockText = '';
    let blockColor = '';
    
    switch(blockType) {
        case 'move':
            blockText = 'move 10 steps';
            blockColor = 'motion';
            break;
        case 'turn':
            blockText = 'turn 15 degrees';
            blockColor = 'motion';
            break;
        case 'goto':
            blockText = 'go to x: 0 y: 0';
            blockColor = 'motion';
            break;
        case 'when-flag':
            blockText = 'when flag clicked';
            blockColor = 'control';
            break;
        case 'repeat':
            blockText = 'repeat 10';
            blockColor = 'control';
            break;
        case 'wait':
            blockText = 'wait 1 seconds';
            blockColor = 'control';
            break;
        case 'say':
            blockText = 'say Hello!';
            blockColor = 'looks';
            break;
        case 'change-color':
            blockText = 'change color effect by 25';
            blockColor = 'looks';
            break;
        case 'play-sound':
            blockText = 'play sound meow';
            blockColor = 'sound';
            break;
    }
    
    block.innerHTML = `
        <span class="block-color ${blockColor}"></span>
        ${blockText}
    `;
    
    return block;
}

function runScript() {
    const sprite = document.getElementById('sprite');
    const stagePreview = document.getElementById('stage-preview');
    
    // Reset sprite position
    sprite.style.transform = 'translate(-50%, -50%)';
    sprite.style.color = 'black';
    
    let delay = 0;
    currentScript.forEach((blockType, index) => {
        setTimeout(() => {
            executeBlock(blockType, sprite);
        }, delay);
        delay += 1000; // 1 second delay between blocks
    });
}

function executeBlock(blockType, sprite) {
    switch(blockType) {
        case 'move':
            // Simulate movement
            sprite.style.transform = 'translate(-50%, -50%) translateX(20px)';
            break;
        case 'turn':
            // Simulate rotation
            sprite.style.transform = 'translate(-50%, -50%) rotate(15deg)';
            break;
        case 'goto':
            // Reset position
            sprite.style.transform = 'translate(-50%, -50%)';
            break;
        case 'say':
            // Show speech bubble
            showSpeechBubble('Hello!');
            break;
        case 'change-color':
            // Change color
            sprite.style.color = getRandomColor();
            break;
        case 'play-sound':
            // Simulate sound (could add actual sound here)
            sprite.style.transform = 'translate(-50%, -50%) scale(1.2)';
            setTimeout(() => {
                sprite.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
            break;
    }
}

function showSpeechBubble(text) {
    const stagePreview = document.getElementById('stage-preview');
    const bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.textContent = text;
    bubble.style.cssText = `
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border: 2px solid #333;
        border-radius: 10px;
        padding: 10px;
        font-size: 14px;
        z-index: 10;
    `;
    
    stagePreview.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 2000);
}

function getRandomColor() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function clearScript() {
    const scriptContainer = document.getElementById('script-container');
    scriptContainer.innerHTML = '<p class="drop-hint">Drag blocks here to build your script!</p>';
    currentScript = [];
}

function resetScript() {
    clearScript();
    const sprite = document.getElementById('sprite');
    sprite.style.transform = 'translate(-50%, -50%)';
    sprite.style.color = 'black';
}

function checkAnswer() {
    const currentExercise = scratchLessons[currentLesson].exercise;
    if (!currentExercise) return;
    
    const correctBlocks = currentExercise.solution;
    const userBlocks = currentScript;
    
    // Simple check - if user has the required blocks
    const hasRequiredBlocks = correctBlocks.every(block => userBlocks.includes(block));
    
    if (hasRequiredBlocks) {
        showMessage('✅ Great job! You completed the exercise!', 'success');
        if (!completedLessons.includes(scratchLessons[currentLesson].id)) {
            completedLessons.push(scratchLessons[currentLesson].id);
            updateProgress();
            loadLessons();
        }
    } else {
        showMessage('❌ Try again! Make sure you have all the required blocks.', 'error');
    }
}

function showHint() {
    const currentExercise = scratchLessons[currentLesson].exercise;
    if (currentExercise) {
        showMessage(`💡 Hint: ${currentExercise.hint}`, 'hint');
    }
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        messageDiv.style.background = '#28a745';
    } else if (type === 'error') {
        messageDiv.style.background = '#dc3545';
    } else if (type === 'hint') {
        messageDiv.style.background = '#ffc107';
        messageDiv.style.color = '#333';
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function updateProgress() {
    const progress = (completedLessons.length / scratchLessons.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${Math.round(progress)}% Complete`;
}

// AI Widget Functions
function toggleAIChat() {
    const chatContainer = document.getElementById('ai-chat-container');
    const widgetButton = document.getElementById('ai-widget-button');
    
    if (chatContainer.classList.contains('show')) {
        chatContainer.classList.remove('show');
        widgetButton.classList.remove('expanded');
    } else {
        chatContainer.classList.add('show');
        widgetButton.classList.add('expanded');
    }
}

function handleAIChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function sendAIMessage() {
    const input = document.getElementById('ai-chat-input');
    const message = input.value.trim();
    
    if (message) {
        addAIMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const aiResponse = generateAIResponse(message);
            addAIMessage(aiResponse, 'ai');
        }, 1000);
    }
}

function addAIMessage(message, sender) {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.textContent = message;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
    const responses = {
        'hello': 'Hi there! 👋 I\'m your Scratch/Blocks AI Tutor! How can I help you with visual programming today?',
        'help': 'I can help you with:\n• Understanding different block types\n• Building scripts and programs\n• Creating games and animations\n• Troubleshooting your code\n\nWhat would you like to learn about?',
        'blocks': 'Scratch blocks are organized by color:\n• 🔵 Blue = Motion blocks (move, turn)\n• 🟡 Yellow = Control blocks (repeat, wait)\n• 🔴 Purple = Looks blocks (say, change color)\n• 🟢 Green = Sound blocks (play sound)\n\nTry dragging some blocks to the script area!',
        'move': 'Motion blocks control how your sprite moves:\n• "move 10 steps" - moves forward\n• "turn 15 degrees" - rotates\n• "go to x: 0 y: 0" - jumps to position\n\nTry combining move and turn blocks!',
        'control': 'Control blocks manage program flow:\n• "when flag clicked" - starts the program\n• "repeat 10" - loops actions\n• "wait 1 seconds" - pauses\n\nControl blocks are like the conductor of your program!',
        'game': 'To create a game in Scratch:\n1. Start with "when flag clicked"\n2. Add "repeat" for game loop\n3. Include motion blocks for movement\n4. Add looks blocks for effects\n5. Include sound blocks for audio\n\nTry building the dancing cat project!'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'That\'s a great question! 🤔 I\'m here to help you learn Scratch/Blocks programming. Try asking about blocks, motion, control, or how to create games!';
}

function checkAuthStatus() {
    const token = localStorage.getItem('authToken');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const loginLink = document.getElementById('login-link');
    
    if (token) {
        // In a real app, you'd verify the token with the server
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        userName.textContent = user.name || 'User';
        userInfo.style.display = 'inline';
        loginLink.style.display = 'none';
    } else {
        userInfo.style.display = 'none';
        loginLink.style.display = 'inline';
    }
}

function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = 'codecourse.html';
}
