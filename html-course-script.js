// HTML Course Script
let currentLesson = 0;
let completedLessons = new Set();
let htmlLessons = [
    {
        id: 0,
        title: "Welcome to HTML!",
        content: `
            <h2>🌐 Welcome to HTML Web Development!</h2>
            <p>HTML (HyperText Markup Language) is the foundation of every website. Let's learn how to create beautiful web pages!</p>
            
            <div class="lesson-features">
                <div class="feature">
                    <span class="feature-icon">📝</span>
                    <h4>Structure</h4>
                    <p>Learn to organize content with proper HTML tags</p>
                </div>
                <div class="feature">
                    <span class="feature-icon">🎨</span>
                    <h4>Design</h4>
                    <p>Create visually appealing layouts and styles</p>
                </div>
                <div class="feature">
                    <span class="feature-icon">🔗</span>
                    <h4>Connect</h4>
                    <p>Link pages together and add interactive elements</p>
                </div>
            </div>
        `,
        exercise: null
    },
    {
        id: 1,
        title: "HTML Basics",
        content: `
            <h2>📝 HTML Document Structure</h2>
            <p>Every HTML document has a basic structure with these essential elements:</p>
            
            <div class="code-example">
                <h4>Basic HTML Template:</h4>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Key Concepts:</h4>
                <ul>
                    <li><strong>&lt;!DOCTYPE html&gt;</strong> - Declares this is an HTML5 document</li>
                    <li><strong>&lt;html&gt;</strong> - The root element of the page</li>
                    <li><strong>&lt;head&gt;</strong> - Contains metadata about the document</li>
                    <li><strong>&lt;title&gt;</strong> - Sets the page title (shown in browser tab)</li>
                    <li><strong>&lt;body&gt;</strong> - Contains all visible content</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a basic HTML page with a title 'My Website' and a heading 'Welcome to My Site'",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Add your heading here -->
    
</body>
</html>`,
            solution: "h1",
            hint: "Use the &lt;h1&gt; tag for the main heading"
        }
    },
    {
        id: 2,
        title: "Text Elements",
        content: `
            <h2>📄 Text Formatting Elements</h2>
            <p>HTML provides many ways to format and structure text content:</p>
            
            <div class="code-example">
                <h4>Common Text Elements:</h4>
                <pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;
&lt;h3&gt;Section Heading&lt;/h3&gt;
&lt;p&gt;This is a paragraph of text.&lt;/p&gt;
&lt;strong&gt;Bold text&lt;/strong&gt;
&lt;em&gt;Italic text&lt;/em&gt;
&lt;br&gt;Line break
&lt;hr&gt;Horizontal rule</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Heading Hierarchy:</h4>
                <ul>
                    <li><strong>h1</strong> - Main page title (use only one per page)</li>
                    <li><strong>h2</strong> - Major sections</li>
                    <li><strong>h3</strong> - Subsections</li>
                    <li><strong>h4, h5, h6</strong> - Further subdivisions</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a page with a main heading, subheading, and a paragraph with bold and italic text",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting</title>
</head>
<body>
    <!-- Add your content here -->
    
</body>
</html>`,
            solution: "h1",
            hint: "Use &lt;h1&gt;, &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, and &lt;em&gt; tags"
        }
    },
    {
        id: 3,
        title: "Lists",
        content: `
            <h2>📋 Creating Lists</h2>
            <p>HTML offers three types of lists to organize information:</p>
            
            <div class="code-example">
                <h4>List Types:</h4>
                <pre><code>&lt;!-- Unordered List (bullets) --&gt;
&lt;ul&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered List (numbers) --&gt;
&lt;ol&gt;
    &lt;li&gt;Step one&lt;/li&gt;
    &lt;li&gt;Step two&lt;/li&gt;
    &lt;li&gt;Step three&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Definition List --&gt;
&lt;dl&gt;
    &lt;dt&gt;Term&lt;/dt&gt;
    &lt;dd&gt;Definition of the term&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>When to Use Each:</h4>
                <ul>
                    <li><strong>Unordered (ul)</strong> - For items without specific order</li>
                    <li><strong>Ordered (ol)</strong> - For steps, rankings, or numbered items</li>
                    <li><strong>Definition (dl)</strong> - For term-definition pairs</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a page with an ordered list of 3 steps and an unordered list of 3 fruits",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Lists Practice</title>
</head>
<body>
    <!-- Add your lists here -->
    
</body>
</html>`,
            solution: "ol",
            hint: "Use &lt;ol&gt; for ordered list and &lt;ul&gt; for unordered list"
        }
    },
    {
        id: 4,
        title: "Links and Images",
        content: `
            <h2>🔗 Links and Images</h2>
            <p>Learn how to connect pages and add visual content:</p>
            
            <div class="code-example">
                <h4>Creating Links and Images:</h4>
                <pre><code>&lt;!-- Basic Link --&gt;
&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Link to another page --&gt;
&lt;a href="about.html"&gt;About Us&lt;/a&gt;

&lt;!-- Image --&gt;
&lt;img src="image.jpg" alt="Description of image"&gt;

&lt;!-- Image with link --&gt;
&lt;a href="https://www.example.com"&gt;
    &lt;img src="logo.png" alt="Click to visit"&gt;
&lt;/a&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Important Attributes:</h4>
                <ul>
                    <li><strong>href</strong> - The destination URL for links</li>
                    <li><strong>src</strong> - The source file for images</li>
                    <li><strong>alt</strong> - Alternative text for images (accessibility)</li>
                    <li><strong>target="_blank"</strong> - Opens link in new tab</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a page with a link to Google and an image (use a placeholder URL)",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Links and Images</title>
</head>
<body>
    <!-- Add your link and image here -->
    
</body>
</html>`,
            solution: "a",
            hint: "Use &lt;a href=\"https://www.google.com\"&gt;Google&lt;/a&gt; and &lt;img src=\"https://via.placeholder.com/300x200\" alt=\"Placeholder\"&gt;"
        }
    },
    {
        id: 5,
        title: "Forms",
        content: `
            <h2>📝 HTML Forms</h2>
            <p>Forms allow users to input data and interact with your website:</p>
            
            <div class="code-example">
                <h4>Basic Form Structure:</h4>
                <pre><code>&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;label for="message"&gt;Message:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Common Input Types:</h4>
                <ul>
                    <li><strong>text</strong> - Single line text input</li>
                    <li><strong>email</strong> - Email address with validation</li>
                    <li><strong>password</strong> - Hidden text input</li>
                    <li><strong>checkbox</strong> - Multiple choice selection</li>
                    <li><strong>radio</strong> - Single choice selection</li>
                    <li><strong>submit</strong> - Form submission button</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a contact form with name, email, and message fields",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    <!-- Add your form here -->
    
</body>
</html>`,
            solution: "form",
            hint: "Use &lt;form&gt;, &lt;label&gt;, &lt;input&gt;, &lt;textarea&gt;, and &lt;button&gt; elements"
        }
    },
    {
        id: 6,
        title: "Tables",
        content: `
            <h2>📊 HTML Tables</h2>
            <p>Tables are perfect for displaying structured data:</p>
            
            <div class="code-example">
                <h4>Table Structure:</h4>
                <pre><code>&lt;table border="1"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Age&lt;/th&gt;
            &lt;th&gt;City&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;John&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
            &lt;td&gt;New York&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Jane&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
            &lt;td&gt;Los Angeles&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Table Elements:</h4>
                <ul>
                    <li><strong>&lt;table&gt;</strong> - Container for the entire table</li>
                    <li><strong>&lt;thead&gt;</strong> - Header section of the table</li>
                    <li><strong>&lt;tbody&gt;</strong> - Body section of the table</li>
                    <li><strong>&lt;tr&gt;</strong> - Table row</li>
                    <li><strong>&lt;th&gt;</strong> - Header cell (bold by default)</li>
                    <li><strong>&lt;td&gt;</strong> - Data cell</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a table with 3 columns: Product, Price, and Stock",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Product Table</title>
</head>
<body>
    <h1>Product Inventory</h1>
    <!-- Add your table here -->
    
</body>
</html>`,
            solution: "table",
            hint: "Use &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements"
        }
    },
    {
        id: 7,
        title: "Semantic HTML",
        content: `
            <h2>🎯 Semantic HTML Elements</h2>
            <p>Semantic elements give meaning to your HTML structure:</p>
            
            <div class="code-example">
                <h4>Semantic Structure:</h4>
                <pre><code>&lt;header&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;article&gt;
        &lt;section&gt;
            &lt;h2&gt;Article Title&lt;/h2&gt;
            &lt;p&gt;Article content...&lt;/p&gt;
        &lt;/section&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
        &lt;h3&gt;Related Links&lt;/h3&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;p&gt;&copy; 2024 My Website&lt;/p&gt;
&lt;/footer&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Benefits of Semantic HTML:</h4>
                <ul>
                    <li><strong>Accessibility</strong> - Screen readers understand the structure</li>
                    <li><strong>SEO</strong> - Search engines better understand your content</li>
                    <li><strong>Maintainability</strong> - Code is easier to read and maintain</li>
                    <li><strong>Future-proof</strong> - Works better with modern web technologies</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a semantic HTML page with header, main content, and footer",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Semantic Page</title>
</head>
<body>
    <!-- Add semantic elements here -->
    
</body>
</html>`,
            solution: "header",
            hint: "Use &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, and &lt;footer&gt; elements"
        }
    },
    {
        id: 8,
        title: "CSS Integration",
        content: `
            <h2>🎨 Connecting HTML with CSS</h2>
            <p>Learn how to style your HTML with CSS:</p>
            
            <div class="code-example">
                <h4>Adding CSS to HTML:</h4>
                <pre><code>&lt;!-- Internal CSS --&gt;
&lt;head&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;!-- External CSS --&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>CSS Methods:</h4>
                <ul>
                    <li><strong>Inline</strong> - style attribute on individual elements</li>
                    <li><strong>Internal</strong> - &lt;style&gt; tag in the head</li>
                    <li><strong>External</strong> - Separate .css file (recommended)</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create an HTML page with internal CSS styling",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>Styled Page</title>
    <style>
        /* Add your CSS here */
        
    </style>
</head>
<body>
    <h1>Welcome to My Styled Page</h1>
    <p>This paragraph should be styled.</p>
</body>
</html>`,
            solution: "body",
            hint: "Add CSS rules for body, h1, and p elements"
        }
    },
    {
        id: 9,
        title: "Final Project",
        content: `
            <h2>🚀 Build Your First Website!</h2>
            <p>Combine everything you've learned to create a complete website:</p>
            
            <div class="project-requirements">
                <h4>Your website should include:</h4>
                <ul>
                    <li>✅ Proper HTML structure with semantic elements</li>
                    <li>✅ Navigation menu with links</li>
                    <li>✅ Multiple pages (Home, About, Contact)</li>
                    <li>✅ Images and formatted text</li>
                    <li>✅ Contact form</li>
                    <li>✅ Basic CSS styling</li>
                    <li>✅ Responsive design considerations</li>
                </ul>
            </div>
            
            <div class="concept-box">
                <h4>Project Tips:</h4>
                <ul>
                    <li>Start with a wireframe or sketch</li>
                    <li>Use semantic HTML for better structure</li>
                    <li>Test your links and forms</li>
                    <li>Make sure it looks good on different screen sizes</li>
                    <li>Validate your HTML using online tools</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a complete website with home, about, and contact pages",
            starterCode: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin-right: 1rem;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <!-- Add your complete website here -->
    
</body>
</html>`,
            solution: "nav",
            hint: "Create navigation, main content sections, and footer"
        }
    }
];

function buildHtmlActivities(lesson) {
    const primary = lesson.exercise || {
        question: `Build a mini page for ${lesson.title}`,
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n    <title>${lesson.title}</title>\n</head>\n<body>\n    <!-- Build your page here -->\n</body>\n</html>`,
        solution: "<h1>",
        hint: "Start with a heading and one paragraph."
    };

    return [
        primary,
        {
            question: `Stretch Activity: Extend \"${lesson.title}\" with semantic structure and one link.`,
            starterCode: primary.starterCode,
            solution: "section",
            hint: "Use semantic tags like <section>, <article>, or <footer>."
        }
    ];
}

function normalizeHtmlLessons() {
    htmlLessons = htmlLessons.slice(0, 15);

    while (htmlLessons.length < 15) {
        const nextLesson = htmlLessons.length + 1;
        htmlLessons.push({
            id: nextLesson,
            title: `HTML Practice Studio ${nextLesson}`,
            content: `
                <h2>🧪 HTML Practice Studio ${nextLesson}</h2>
                <p>Practice combining headings, lists, links, media, and semantic layout in one clean page.</p>
                <div class="concept-box">
                    <h4>Focus Skills</h4>
                    <ul>
                        <li>Organize content with semantic tags</li>
                        <li>Improve accessibility with labels and alt text</li>
                        <li>Keep page structure readable and reusable</li>
                    </ul>
                </div>
            `,
            exercise: null
        });
    }

    htmlLessons = htmlLessons.map((lesson, index) => {
        const activities = lesson.activities?.length ? lesson.activities : buildHtmlActivities(lesson);
        return {
            ...lesson,
            id: index + 1,
            activities,
            exercise: activities[0]
        };
    });
}

normalizeHtmlLessons();

// Initialize the course
document.addEventListener('DOMContentLoaded', function() {
    loadLessons();
    startCourse();
});

function loadLessons() {
    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';
    
    htmlLessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item';
        lessonItem.innerHTML = `
            <span class="lesson-number">${index + 1}</span>
            <span class="lesson-title">${lesson.title}</span>
            <span class="lesson-status ${completedLessons.has(index) ? 'completed' : ''}">
                ${completedLessons.has(index) ? '✓' : ''}
            </span>
        `;
        lessonItem.onclick = () => loadLesson(index);
        lessonList.appendChild(lessonItem);
    });
}

function startCourse() {
    loadLesson(0);
}

function loadLesson(lessonIndex) {
    currentLesson = lessonIndex;
    const lesson = htmlLessons[lessonIndex];
    
    // Update lesson list
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        item.classList.toggle('active', index === lessonIndex);
    });
    
    // Show lesson content
    document.getElementById('lesson-content').innerHTML = lesson.content;
    
    // Show exercise if available
    if (lesson.exercise) {
        loadExercise(lesson.exercise);
    } else {
        document.getElementById('exercise-section').style.display = 'none';
    }
    
    // Show block editor for coding lessons
    if (lessonIndex > 0) {
        document.getElementById('block-section').style.display = 'block';
        setupCodeEditor();
    } else {
        document.getElementById('block-section').style.display = 'none';
    }
}

function loadExercise(exercise) {
    const exerciseSection = document.getElementById('exercise-section');
    const exerciseContent = document.getElementById('exercise-content');
    
    exerciseContent.innerHTML = `
        <h4>${exercise.question}</h4>
        <div class="code-editor">
            <textarea id="code-input" placeholder="Write your HTML code here...">${exercise.starterCode}</textarea>
        </div>
    `;
    
    exerciseSection.style.display = 'block';
}

function setupCodeEditor() {
    const codeInput = document.getElementById('code-input');
    const previewPanel = document.getElementById('preview-panel');
    
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            updatePreview(codeInput.value);
        });
        
        // Initial preview
        updatePreview(codeInput.value);
    }
}

function updatePreview(htmlCode) {
    const previewPanel = document.getElementById('preview-panel');
    if (previewPanel) {
        previewPanel.innerHTML = htmlCode;
    }
}

function checkAnswer() {
    const lesson = htmlLessons[currentLesson];
    if (!lesson.exercise) return;
    
    const codeInput = document.getElementById('code-input');
    const userCode = codeInput.value.toLowerCase();
    const solution = lesson.exercise.solution.toLowerCase();
    
    if (userCode.includes(solution)) {
        showMessage('✅ Correct! Great job!', 'success');
        completeLesson(currentLesson);
    } else {
        showMessage('❌ Try again. Check your code carefully.', 'error');
    }
}

function showHint() {
    const lesson = htmlLessons[currentLesson];
    if (lesson.exercise && lesson.exercise.hint) {
        showMessage(`💡 Hint: ${lesson.exercise.hint}`, 'hint');
    }
}

function completeLesson(lessonIndex) {
    completedLessons.add(lessonIndex);
    updateProgress();
    loadLessons();
    
    // Auto-advance to next lesson if available
    if (lessonIndex < htmlLessons.length - 1) {
        setTimeout(() => {
            loadLesson(lessonIndex + 1);
        }, 1500);
    }
}

function updateProgress() {
    const progress = (completedLessons.size / htmlLessons.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = Math.round(progress) + '% Complete';
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// AI Widget Functions
function toggleAIChat() {
    const chatContainer = document.getElementById('ai-chat-container');
    chatContainer.classList.toggle('active');
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
        addAIMessage('user', message);
        input.value = '';
        
        // Generate AI response
        const response = generateAIResponse(message);
        setTimeout(() => {
            addAIMessage('ai', response);
        }, 500);
    }
}

function addAIMessage(sender, message) {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
    const responses = {
        'hello': 'Hi there! I\'m your HTML tutor! 🌐 Ready to learn web development?',
        'help': 'I can help you with HTML tags, structure, forms, tables, and more! What would you like to learn?',
        'tags': 'HTML tags are the building blocks of web pages. Common ones include &lt;h1&gt;, &lt;p&gt;, &lt;div&gt;, &lt;a&gt;, and &lt;img&gt;.',
        'form': 'Forms use &lt;form&gt;, &lt;input&gt;, &lt;label&gt;, and &lt;button&gt; elements. They collect user data!',
        'css': 'CSS makes HTML beautiful! You can add it with &lt;style&gt; tags or link external files.',
        'table': 'Tables use &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements to display data in rows and columns.',
        'link': 'Links use the &lt;a&gt; tag with href attribute: &lt;a href="url"&gt;text&lt;/a&gt;',
        'image': 'Images use &lt;img src="file.jpg" alt="description"&gt;. Always include alt text for accessibility!',
        'semantic': 'Semantic HTML uses meaningful tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, and &lt;footer&gt;.',
        'structure': 'Every HTML page needs &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; elements.'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'Great question! HTML is the foundation of web development. Try asking about specific tags, forms, tables, or semantic elements! 🌐';
}
