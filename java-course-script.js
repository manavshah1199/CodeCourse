// Java Course Script
let currentLesson = 0;
let completedLessons = new Set();
let javaLessons = [
    {
        id: 0,
        title: "Welcome to Java!",
        content: `
            <h2>☕ Welcome to Java Programming!</h2>
            <p>Java is a powerful, object-oriented programming language used to build applications, games, and enterprise software.</p>
            
            <div class="lesson-features">
                <div class="feature">
                    <span class="feature-icon">🏗️</span>
                    <h4>Object-Oriented</h4>
                    <p>Learn to build programs using classes and objects</p>
                </div>
                <div class="feature">
                    <span class="feature-icon">🌍</span>
                    <h4>Platform Independent</h4>
                    <p>Write once, run anywhere with Java Virtual Machine</p>
                </div>
                <div class="feature">
                    <span class="feature-icon">🔒</span>
                    <h4>Secure & Reliable</h4>
                    <p>Built-in security features and strong type checking</p>
                </div>
            </div>
        `,
        exercise: null
    },
    {
        id: 1,
        title: "Java Basics",
        content: `
            <h2>📝 Your First Java Program</h2>
            <p>Every Java program starts with a class and a main method:</p>
            
            <div class="code-example">
                <h4>Hello World Program:</h4>
                <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Key Components:</h4>
                <ul>
                    <li><strong>public class</strong> - Class declaration (file name must match)</li>
                    <li><strong>public static void main(String[] args)</strong> - Entry point method</li>
                    <li><strong>System.out.println()</strong> - Prints text to console</li>
                    <li><strong>;</strong> - Semicolon ends each statement</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a Java program that prints 'Hello, Java!' to the console",
            starterCode: `public class HelloJava {
    public static void main(String[] args) {
        // Add your print statement here
        
    }
}`,
            solution: "println",
            hint: "Use System.out.println() to print text"
        }
    },
    {
        id: 2,
        title: "Variables and Data Types",
        content: `
            <h2>📊 Variables and Data Types</h2>
            <p>Java is a strongly-typed language. Variables must be declared with their type:</p>
            
            <div class="code-example">
                <h4>Variable Declaration:</h4>
                <pre><code>// Integer types
int age = 25;
long bigNumber = 1234567890L;

// Floating point types
double price = 19.99;
float temperature = 98.6f;

// Character and String
char grade = 'A';
String name = "John Doe";

// Boolean
boolean isStudent = true;

// Print variables
System.out.println("Name: " + name);
System.out.println("Age: " + age);
System.out.println("Price: $" + price);</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Common Data Types:</h4>
                <ul>
                    <li><strong>int</strong> - 32-bit integer (-2^31 to 2^31-1)</li>
                    <li><strong>long</strong> - 64-bit integer (add 'L' suffix)</li>
                    <li><strong>double</strong> - 64-bit floating point (default)</li>
                    <li><strong>float</strong> - 32-bit floating point (add 'f' suffix)</li>
                    <li><strong>char</strong> - Single character (use single quotes)</li>
                    <li><strong>String</strong> - Text (use double quotes)</li>
                    <li><strong>boolean</strong> - true or false</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create variables for a student's name, age, and GPA, then print them",
            starterCode: `public class StudentInfo {
    public static void main(String[] args) {
        // Declare variables here
        
        
        // Print the information
        
        
    }
}`,
            solution: "String",
            hint: "Use String for name, int for age, double for GPA"
        }
    },
    {
        id: 3,
        title: "Operators and Expressions",
        content: `
            <h2>🔢 Operators and Expressions</h2>
            <p>Java provides various operators for mathematical and logical operations:</p>
            
            <div class="code-example">
                <h4>Arithmetic Operators:</h4>
                <pre><code>int a = 10;
int b = 3;

// Basic arithmetic
int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3
int remainder = a % b;  // 1

// Increment and decrement
int x = 5;
x++; // x is now 6
x--; // x is now 5

// Assignment operators
int y = 10;
y += 5; // Same as y = y + 5
y *= 2; // Same as y = y * 2

System.out.println("Sum: " + sum);
System.out.println("Remainder: " + remainder);</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Comparison Operators:</h4>
                <ul>
                    <li><strong>==</strong> - Equal to</li>
                    <li><strong>!=</strong> - Not equal to</li>
                    <li><strong>&lt;</strong> - Less than</li>
                    <li><strong>&gt;</strong> - Greater than</li>
                    <li><strong>&lt;=</strong> - Less than or equal to</li>
                    <li><strong>&gt;=</strong> - Greater than or equal to</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Calculate the area of a rectangle with length 8 and width 5",
            starterCode: `public class RectangleArea {
    public static void main(String[] args) {
        int length = 8;
        int width = 5;
        
        // Calculate area here
        
        
        // Print the result
        
        
    }
}`,
            solution: "area",
            hint: "Area = length × width"
        }
    },
    {
        id: 4,
        title: "Control Flow",
        content: `
            <h2>🔄 Control Flow Statements</h2>
            <p>Control flow statements determine the order of execution:</p>
            
            <div class="code-example">
                <h4>If-Else Statements:</h4>
                <pre><code>int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}

// Switch statement
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Logical Operators:</h4>
                <ul>
                    <li><strong>&&</strong> - AND (both conditions must be true)</li>
                    <li><strong>||</strong> - OR (at least one condition must be true)</li>
                    <li><strong>!</strong> - NOT (negates the condition)</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Write a program that checks if a number is positive, negative, or zero",
            starterCode: `public class NumberCheck {
    public static void main(String[] args) {
        int number = -5;
        
        // Check the number here
        
        
    }
}`,
            solution: "if",
            hint: "Use if-else statements to check if number > 0, < 0, or == 0"
        }
    },
    {
        id: 5,
        title: "Loops",
        content: `
            <h2>🔄 Loops and Iteration</h2>
            <p>Loops allow you to execute code repeatedly:</p>
            
            <div class="code-example">
                <h4>For Loop:</h4>
                <pre><code>// Count from 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// While loop
int count = 0;
while (count < 3) {
    System.out.println("While count: " + count);
    count++;
}

// Do-while loop
int num = 1;
do {
    System.out.println("Do-while: " + num);
    num++;
} while (num <= 3);

// Enhanced for loop (for arrays)
String[] fruits = {"Apple", "Banana", "Orange"};
for (String fruit : fruits) {
    System.out.println("Fruit: " + fruit);
}</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Loop Control:</h4>
                <ul>
                    <li><strong>break</strong> - Exit the loop immediately</li>
                    <li><strong>continue</strong> - Skip to next iteration</li>
                    <li><strong>for</strong> - When you know the number of iterations</li>
                    <li><strong>while</strong> - When condition is checked before execution</li>
                    <li><strong>do-while</strong> - When condition is checked after execution</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Print the first 10 even numbers using a for loop",
            starterCode: `public class EvenNumbers {
    public static void main(String[] args) {
        // Print first 10 even numbers here
        
        
    }
}`,
            solution: "for",
            hint: "Use a for loop and check if i % 2 == 0, or increment by 2"
        }
    },
    {
        id: 6,
        title: "Arrays",
        content: `
            <h2>📦 Arrays</h2>
            <p>Arrays store multiple values of the same type:</p>
            
            <div class="code-example">
                <h4>Array Declaration and Usage:</h4>
                <pre><code>// Declare and initialize array
int[] numbers = {1, 2, 3, 4, 5};

// Access elements (index starts at 0)
System.out.println("First element: " + numbers[0]);
System.out.println("Last element: " + numbers[numbers.length - 1]);

// Loop through array
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element " + i + ": " + numbers[i]);
}

// Enhanced for loop
for (int num : numbers) {
    System.out.println("Number: " + num);
}

// Create array of specific size
String[] names = new String[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";

// 2D array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Array Properties:</h4>
                <ul>
                    <li><strong>Fixed size</strong> - Cannot change length after creation</li>
                    <li><strong>Zero-indexed</strong> - First element is at index 0</li>
                    <li><strong>length property</strong> - Get array size</li>
                    <li><strong>Type safety</strong> - All elements must be same type</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create an array of 5 numbers and find their sum",
            starterCode: `public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;
        
        // Calculate sum here
        
        
        System.out.println("Sum: " + sum);
    }
}`,
            solution: "sum",
            hint: "Use a loop to add each element to the sum variable"
        }
    },
    {
        id: 7,
        title: "Methods",
        content: `
            <h2>🔧 Methods and Functions</h2>
            <p>Methods are reusable blocks of code:</p>
            
            <div class="code-example">
                <h4>Method Declaration:</h4>
                <pre><code>public class Calculator {
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method without return value (void)
    public static void printMessage(String message) {
        System.out.println("Message: " + message);
    }
    
    // Method with default parameter
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    // Method overloading (same name, different parameters)
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        // Call methods
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
        
        printMessage("Welcome to Java!");
        greet("Alice");
        
        System.out.println("Int multiply: " + multiply(4, 5));
        System.out.println("Double multiply: " + multiply(4.5, 2.0));
    }
}</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Method Components:</h4>
                <ul>
                    <li><strong>Access modifier</strong> - public, private, protected</li>
                    <li><strong>Static keyword</strong> - Can be called without creating object</li>
                    <li><strong>Return type</strong> - Data type returned (void if nothing)</li>
                    <li><strong>Method name</strong> - Descriptive name in camelCase</li>
                    <li><strong>Parameters</strong> - Input values in parentheses</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a method that calculates the factorial of a number",
            starterCode: `public class Factorial {
    // Create factorial method here
    
    
    public static void main(String[] args) {
        int n = 5;
        int result = factorial(n);
        System.out.println(n + "! = " + result);
    }
}`,
            solution: "factorial",
            hint: "Use a loop to multiply numbers from 1 to n"
        }
    },
    {
        id: 8,
        title: "Classes and Objects",
        content: `
            <h2>🏗️ Classes and Objects</h2>
            <p>Java is object-oriented. Classes are blueprints for objects:</p>
            
            <div class="code-example">
                <h4>Class Definition:</h4>
                <pre><code>public class Student {
    // Instance variables (attributes)
    private String name;
    private int age;
    private double gpa;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.gpa = 0.0;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
    
    // Instance method
    public void study() {
        System.out.println(name + " is studying...");
        gpa += 0.1;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
    }
}

// Main class to test Student
public class Main {
    public static void main(String[] args) {
        // Create Student objects
        Student student1 = new Student("Alice", 20);
        Student student2 = new Student("Bob", 22);
        
        // Use methods
        student1.setGpa(3.8);
        student1.displayInfo();
        student1.study();
        
        student2.setGpa(3.2);
        student2.displayInfo();
    }
}</code></pre>
            </div>
            
            <div class="concept-box">
                <h4>Object-Oriented Concepts:</h4>
                <ul>
                    <li><strong>Encapsulation</strong> - Data hiding with private fields</li>
                    <li><strong>Inheritance</strong> - Classes can extend other classes</li>
                    <li><strong>Polymorphism</strong> - Same method, different behaviors</li>
                    <li><strong>Abstraction</strong> - Hide complex implementation details</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a Rectangle class with width, height, and methods to calculate area and perimeter",
            starterCode: `public class Rectangle {
    // Add instance variables here
    
    
    // Add constructor here
    
    
    // Add methods here
    
    
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5, 3);
        System.out.println("Area: " + rect.calculateArea());
        System.out.println("Perimeter: " + rect.calculatePerimeter());
    }
}`,
            solution: "class",
            hint: "Create private fields for width and height, constructor, and public methods"
        }
    },
    {
        id: 9,
        title: "Final Project",
        content: `
            <h2>🚀 Build a Java Application!</h2>
            <p>Combine everything you've learned to create a complete Java program:</p>
            
            <div class="project-requirements">
                <h4>Your application should include:</h4>
                <ul>
                    <li>✅ Multiple classes with proper structure</li>
                    <li>✅ Variables, arrays, and control flow</li>
                    <li>✅ Methods with parameters and return values</li>
                    <li>✅ User input and output</li>
                    <li>✅ Error handling and validation</li>
                    <li>✅ Object-oriented design principles</li>
                    <li>✅ Comments and documentation</li>
                </ul>
            </div>
            
            <div class="concept-box">
                <h4>Project Ideas:</h4>
                <ul>
                    <li><strong>Student Management System</strong> - Track students, grades, courses</li>
                    <li><strong>Bank Account Manager</strong> - Handle deposits, withdrawals, balances</li>
                    <li><strong>Library Catalog</strong> - Manage books, authors, borrowing</li>
                    <li><strong>Simple Game</strong> - Number guessing, quiz, or calculator</li>
                    <li><strong>Inventory System</strong> - Track products, prices, stock levels</li>
                </ul>
            </div>
        `,
        exercise: {
            question: "Create a simple calculator program with a menu-driven interface",
            starterCode: `import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Simple Calculator");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");
        System.out.println("5. Exit");
        
        // Add your calculator logic here
        
        
        scanner.close();
    }
}`,
            solution: "switch",
            hint: "Use a while loop with switch statement to handle menu options"
        }
    }
];

// Normalize to 15 lessons with 2 activities per lesson

function buildJavaActivities(lesson) {
    const primary = lesson.exercise || {
        question: `Create a Java class for ${lesson.title}`,
        starterCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
        solution: "class",
        hint: "Start with a class and a main method."
    };

    return [
        primary,
        {
            question: `Challenge Activity: Add input handling and one extra condition for "${lesson.title}".`,
            starterCode: primary.starterCode,
            solution: primary.solution,
            hint: "Use Scanner with if/switch based on this lesson's focus."
        }
    ];
}

function normalizeJavaLessons() {
    javaLessons = javaLessons.slice(0, 15);

    while (javaLessons.length < 15) {
        const n = javaLessons.length + 1;
        javaLessons.push({
            id: n,
            title: `Java Practice Lab ${n}`,
            content: `
                <h2>☕ Java Practice Lab ${n}</h2>
                <p>Apply Java fundamentals to build clean, reusable console programs.</p>
            `,
            exercise: null
        });
    }

    javaLessons = javaLessons.map((lesson, index) => {
        const activities = lesson.activities?.length ? lesson.activities : buildJavaActivities(lesson);
        return {
            ...lesson,
            id: index + 1,
            activities,
            exercise: activities[0]
        };
    });
}

normalizeJavaLessons();

// Initialize the course
document.addEventListener('DOMContentLoaded', function() {
    loadLessons();
    startCourse();
});

function loadLessons() {
    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';
    
    javaLessons.forEach((lesson, index) => {
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
    const lesson = javaLessons[lessonIndex];
    
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
    
    // Show code editor for coding lessons
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
            <textarea id="code-input" placeholder="Write your Java code here...">${exercise.starterCode}</textarea>
        </div>
    `;
    
    exerciseSection.style.display = 'block';
}

function setupCodeEditor() {
    const codeInput = document.getElementById('code-input');
    
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            // Simulate Java compilation/execution
            simulateJavaExecution(codeInput.value);
        });
        
        // Initial execution
        simulateJavaExecution(codeInput.value);
    }
}

function simulateJavaExecution(javaCode) {
    const outputPanel = document.getElementById('output-panel');
    if (outputPanel) {
        // Simple simulation - look for System.out.println statements
        const lines = javaCode.split('\n');
        let output = '';
        
        lines.forEach(line => {
            if (line.includes('System.out.println')) {
                const match = line.match(/System\.out\.println\("([^"]+)"\)/);
                if (match) {
                    output += match[1] + '\n';
                }
            }
        });
        
        outputPanel.innerHTML = output || '// Output will appear here when you run the code';
    }
}

function runCode() {
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        simulateJavaExecution(codeInput.value);
    }
}

function checkAnswer() {
    const lesson = javaLessons[currentLesson];
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
    const lesson = javaLessons[currentLesson];
    if (lesson.exercise && lesson.exercise.hint) {
        showMessage(`💡 Hint: ${lesson.exercise.hint}`, 'hint');
    }
}

function completeLesson(lessonIndex) {
    completedLessons.add(lessonIndex);
    updateProgress();
    loadLessons();
    
    // Auto-advance to next lesson if available
    if (lessonIndex < javaLessons.length - 1) {
        setTimeout(() => {
            loadLesson(lessonIndex + 1);
        }, 1500);
    }
}

function updateProgress() {
    const progress = (completedLessons.size / javaLessons.length) * 100;
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
        'hello': 'Hi there! I\'m your Java tutor! ☕ Ready to learn object-oriented programming?',
        'help': 'I can help you with Java syntax, classes, methods, arrays, and more! What would you like to learn?',
        'class': 'Classes are blueprints for objects. They contain fields (data) and methods (behavior).',
        'method': 'Methods are functions that belong to a class. They can take parameters and return values.',
        'variable': 'Variables store data. Java is strongly-typed, so you must declare the type.',
        'array': 'Arrays store multiple values of the same type. They have fixed size and are zero-indexed.',
        'loop': 'Loops repeat code. Use for when you know iterations, while for conditions, do-while for at least once.',
        'if': 'If statements control program flow based on conditions. Use else for alternative paths.',
        'constructor': 'Constructors initialize objects. They have the same name as the class and no return type.',
        'object': 'Objects are instances of classes. They have state (fields) and behavior (methods).',
        'inheritance': 'Inheritance allows classes to inherit fields and methods from parent classes.',
        'polymorphism': 'Polymorphism means "many forms" - same method can behave differently in different classes.',
        'encapsulation': 'Encapsulation bundles data and methods together, hiding internal details.',
        'static': 'Static members belong to the class, not instances. Use static for utility methods and constants.'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'Great question! Java is a powerful object-oriented language. Try asking about classes, methods, variables, arrays, or OOP concepts! ☕';
}
