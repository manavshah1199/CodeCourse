// Python Course Data
const pythonLessons = [
    {
        id: 1,
        title: "Hello World! 👋",
        content: `
            <h3>Your First Python Program! 🐍</h3>
            <p>Let's start with the classic "Hello World" program. In Python, we use <span class="highlight">print()</span> to display text on the screen.</p>
            
            <div class="code-example">
print("Hello, World!")
            </div>
            
            <p>Try running this code in the editor below! The <span class="highlight">print()</span> function tells Python to show text on the screen.</p>
            
            <h4>Key Points:</h4>
            <ul>
                <li>Text goes inside quotes: <span class="highlight">"Hello, World!"</span></li>
                <li>Use <span class="highlight">print()</span> to display text</li>
                <li>Python is case-sensitive!</li>
            </ul>
        `,
        exercise: {
            question: "Write a program that prints 'Hello, Python!'",
            hint: "Use print() with quotes around your text",
            solution: 'print("Hello, Python!")',
            starterCode: '# Write your code here\n'
        }
    },
    {
        id: 2,
        title: "Variables 📦",
        content: `
            <h3>Storing Information with Variables 📦</h3>
            <p>Variables are like boxes that store information. You can put different types of data in them!</p>
            
            <div class="code-example">
name = "Alex"
age = 12
print("My name is", name)
print("I am", age, "years old")
            </div>
            
            <p>Variables can store:</p>
            <ul>
                <li><span class="highlight">Text</span> (strings): <span class="highlight">name = "Alex"</span></li>
                <li><span class="highlight">Numbers</span>: <span class="highlight">age = 12</span></li>
                <li><span class="highlight">Decimals</span>: <span class="highlight">height = 5.2</span></li>
            </ul>
        `,
        exercise: {
            question: "Create a variable called 'favorite_color' and print it",
            hint: "Use = to assign a value, then print() to show it",
            solution: 'favorite_color = "blue"\nprint(favorite_color)',
            starterCode: '# Create your variable here\n\n# Print it here\n'
        }
    },
    {
        id: 3,
        title: "Math Operations ➕",
        content: `
            <h3>Doing Math with Python ➕</h3>
            <p>Python can do all kinds of math! Here are the basic operations:</p>
            
            <div class="code-example">
a = 10
b = 3

print("Addition:", a + b)      # 13
print("Subtraction:", a - b)   # 7
print("Multiplication:", a * b) # 30
print("Division:", a / b)      # 3.333...
print("Power:", a ** b)        # 1000
            </div>
            
            <h4>Math Symbols:</h4>
            <ul>
                <li><span class="highlight">+</span> Addition</li>
                <li><span class="highlight">-</span> Subtraction</li>
                <li><span class="highlight">*</span> Multiplication</li>
                <li><span class="highlight">/</span> Division</li>
                <li><span class="highlight">**</span> Power</li>
            </ul>
        `,
        exercise: {
            question: "Calculate 15 + 7 and print the result",
            hint: "Use the + operator and print()",
            solution: 'result = 15 + 7\nprint(result)',
            starterCode: '# Calculate 15 + 7 here\n\n# Print the result\n'
        }
    },
    {
        id: 4,
        title: "Input from User ⌨️",
        content: `
            <h3>Getting Input from Users ⌨️</h3>
            <p>Use <span class="highlight">input()</span> to ask users for information!</p>
            
            <div class="code-example">
name = input("What's your name? ")
print("Hello,", name + "!")

age = input("How old are you? ")
print("You are", age, "years old")
            </div>
            
            <p><span class="highlight">input()</span> always returns text (a string). If you want a number, you need to convert it:</p>
            
            <div class="code-example">
age = input("How old are you? ")
age = int(age)  # Convert to number
print("Next year you'll be", age + 1)
            </div>
        `,
        exercise: {
            question: "Ask for the user's favorite food and print 'I love [food] too!'",
            hint: "Use input() to get the food, then print() with the result",
            solution: 'food = input("What is your favorite food? ")\nprint("I love", food, "too!")',
            starterCode: '# Ask for favorite food\n\n# Print the message\n'
        }
    },
    {
        id: 5,
        title: "If Statements 🤔",
        content: `
            <h3>Making Decisions with If Statements 🤔</h3>
            <p>Use <span class="highlight">if</span> to make your program do different things based on conditions!</p>
            
            <div class="code-example">
age = 15

if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote.")

# Check multiple conditions
score = 85
if score >= 90:
    print("A grade!")
elif score >= 80:
    print("B grade!")
else:
    print("Keep studying!")
            </div>
            
            <h4>Comparison Operators:</h4>
            <ul>
                <li><span class="highlight">==</span> Equal to</li>
                <li><span class="highlight">!=</span> Not equal to</li>
                <li><span class="highlight">></span> Greater than</li>
                <li><span class="highlight"><</span> Less than</li>
                <li><span class="highlight">>=</span> Greater than or equal</li>
                <li><span class="highlight"><=</span> Less than or equal</li>
            </ul>
        `,
        exercise: {
            question: "Check if a number is positive, negative, or zero",
            hint: "Use if, elif, and else with >, <, and == operators",
            solution: 'number = 5\nif number > 0:\n    print("Positive")\nelif number < 0:\n    print("Negative")\nelse:\n    print("Zero")',
            starterCode: 'number = 5\n# Check if positive, negative, or zero\n'
        }
    },
    {
        id: 6,
        title: "Loops 🔄",
        content: `
            <h3>Repeating Code with Loops 🔄</h3>
            <p>Loops let you repeat code multiple times without writing it over and over!</p>
            
            <div class="code-example">
# For loop - repeat a specific number of times
for i in range(5):
    print("Hello!", i)

# While loop - repeat while a condition is true
count = 0
while count < 3:
    print("Count:", count)
    count = count + 1
            </div>
            
            <h4>Loop Types:</h4>
            <ul>
                <li><span class="highlight">for</span> - Repeat a specific number of times</li>
                <li><span class="highlight">while</span> - Repeat while condition is true</li>
                <li><span class="highlight">range()</span> - Creates a sequence of numbers</li>
            </ul>
        `,
        exercise: {
            question: "Print numbers 1 to 5 using a for loop",
            hint: "Use for i in range(1, 6):",
            solution: 'for i in range(1, 6):\n    print(i)',
            starterCode: '# Print numbers 1 to 5\n'
        }
    },
    {
        id: 7,
        title: "Lists 📋",
        content: `
            <h3>Storing Multiple Items with Lists 📋</h3>
            <p>Lists are like containers that can hold multiple items!</p>
            
            <div class="code-example">
# Create a list
fruits = ["apple", "banana", "orange"]
print("My fruits:", fruits)

# Access items by position (index starts at 0)
print("First fruit:", fruits[0])
print("Second fruit:", fruits[1])

# Add items to list
fruits.append("grape")
print("After adding grape:", fruits)

# Loop through list
for fruit in fruits:
    print("I like", fruit)
            </div>
            
            <h4>List Operations:</h4>
            <ul>
                <li><span class="highlight">append()</span> - Add item to end</li>
                <li><span class="highlight">len()</span> - Get list length</li>
                <li><span class="highlight">[0]</span> - Access first item</li>
            </ul>
        `,
        exercise: {
            question: "Create a list of 3 colors and print each one",
            hint: "Use [] for list, then loop through it",
            solution: 'colors = ["red", "blue", "green"]\nfor color in colors:\n    print(color)',
            starterCode: '# Create a list of colors\n\n# Print each color\n'
        }
    },
    {
        id: 8,
        title: "Functions 🛠️",
        content: `
            <h3>Creating Your Own Functions 🛠️</h3>
            <p>Functions are like mini-programs that you can reuse!</p>
            
            <div class="code-example">
# Define a function
def greet(name):
    print("Hello,", name + "!")

# Use the function
greet("Alice")
greet("Bob")

# Function with return value
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print("5 + 3 =", result)
            </div>
            
            <h4>Function Parts:</h4>
            <ul>
                <li><span class="highlight">def</span> - Define function</li>
                <li><span class="highlight">parameters</span> - Input values</li>
                <li><span class="highlight">return</span> - Output value</li>
            </ul>
        `,
        exercise: {
            question: "Create a function that multiplies two numbers and returns the result",
            hint: "Use def, parameters, and return",
            solution: 'def multiply(a, b):\n    return a * b\n\nresult = multiply(4, 5)\nprint(result)',
            starterCode: '# Create multiply function\n\n# Test the function\n'
        }
    },
    {
        id: 9,
        title: "Strings 🔤",
        content: `
            <h3>Working with Text (Strings) 🔤</h3>
            <p>Strings are text data. Python has many ways to work with them!</p>
            
            <div class="code-example">
name = "Python"

# String methods
print("Length:", len(name))
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())

# String formatting
age = 12
message = f"I am {age} years old"
print(message)

# String concatenation
first = "Hello"
second = "World"
result = first + " " + second
print(result)
            </div>
            
            <h4>String Methods:</h4>
            <ul>
                <li><span class="highlight">upper()</span> - Make uppercase</li>
                <li><span class="highlight">lower()</span> - Make lowercase</li>
                <li><span class="highlight">len()</span> - Get length</li>
                <li><span class="highlight">+</span> - Join strings</li>
            </ul>
        `,
        exercise: {
            question: "Create a string with your name and print it in uppercase",
            hint: "Use .upper() method",
            solution: 'name = "Alex"\nprint(name.upper())',
            starterCode: '# Create your name string\n\n# Print in uppercase\n'
        }
    },
    {
        id: 10,
        title: "Dictionaries 📚",
        content: `
            <h3>Key-Value Pairs with Dictionaries 📚</h3>
            <p>Dictionaries store data as key-value pairs, like a real dictionary!</p>
            
            <div class="code-example">
# Create a dictionary
person = {
    "name": "Alex",
    "age": 12,
    "city": "New York"
}

# Access values using keys
print("Name:", person["name"])
print("Age:", person["age"])

# Add new key-value pair
person["school"] = "CodeSpark Academy"
print("Updated person:", person)

# Loop through dictionary
for key, value in person.items():
    print(key + ":", value)
            </div>
            
            <h4>Dictionary Features:</h4>
            <ul>
                <li><span class="highlight">keys</span> - Access values</li>
                <li><span class="highlight">items()</span> - Get all pairs</li>
                <li><span class="highlight">values()</span> - Get all values</li>
            </ul>
        `,
        exercise: {
            question: "Create a dictionary for a pet with name, type, and age",
            hint: "Use {} and key: value pairs",
            solution: 'pet = {"name": "Buddy", "type": "dog", "age": 3}\nprint(pet["name"])',
            starterCode: '# Create pet dictionary\n\n# Print pet name\n'
        }
    },
    {
        id: 11,
        title: "Try-Except 🛡️",
        content: `
            <h3>Handling Errors with Try-Except 🛡️</h3>
            <p>Sometimes code can cause errors. Try-except helps handle them gracefully!</p>
            
            <div class="code-example">
# Try to convert user input to number
try:
    age = input("Enter your age: ")
    age = int(age)
    print("Next year you'll be", age + 1)
except ValueError:
    print("That's not a valid number!")

# Try to access list item
fruits = ["apple", "banana"]
try:
    print(fruits[5])  # This will cause an error
except IndexError:
    print("That position doesn't exist!")
            </div>
            
            <h4>Common Error Types:</h4>
            <ul>
                <li><span class="highlight">ValueError</span> - Invalid value</li>
                <li><span class="highlight">IndexError</span> - Invalid list position</li>
                <li><span class="highlight">TypeError</span> - Wrong data type</li>
            </ul>
        `,
        exercise: {
            question: "Ask for a number and handle invalid input",
            hint: "Use try-except with ValueError",
            solution: 'try:\n    num = int(input("Enter a number: "))\n    print("You entered:", num)\nexcept ValueError:\n    print("That\'s not a number!")',
            starterCode: '# Ask for number and handle errors\n'
        }
    },
    {
        id: 12,
        title: "File Handling 📁",
        content: `
            <h3>Reading and Writing Files 📁</h3>
            <p>Python can read and write files on your computer!</p>
            
            <div class="code-example">
# Write to a file
with open("my_file.txt", "w") as file:
    file.write("Hello from Python!")
    file.write("\\nThis is a new line.")

# Read from a file
with open("my_file.txt", "r") as file:
    content = file.read()
    print("File content:")
    print(content)

# Read file line by line
with open("my_file.txt", "r") as file:
    for line in file:
        print("Line:", line.strip())
            </div>
            
            <h4>File Modes:</h4>
            <ul>
                <li><span class="highlight">"w"</span> - Write (creates new file)</li>
                <li><span class="highlight">"r"</span> - Read</li>
                <li><span class="highlight">"a"</span> - Append (add to existing)</li>
            </ul>
        `,
        exercise: {
            question: "Write your name to a file, then read and print it",
            hint: "Use open() with 'w' to write, then 'r' to read",
            solution: 'with open("name.txt", "w") as f:\n    f.write("Alex")\n\nwith open("name.txt", "r") as f:\n    print(f.read())',
            starterCode: '# Write your name to file\n\n# Read and print it\n'
        }
    },
    {
        id: 13,
        title: "Modules 📦",
        content: `
            <h3>Using Python Libraries (Modules) 📦</h3>
            <p>Modules are pre-written code you can import and use!</p>
            
            <div class="code-example">
# Import math module
import math
print("Square root of 16:", math.sqrt(16))
print("Pi:", math.pi)

# Import random module
import random
print("Random number:", random.randint(1, 10))
print("Random choice:", random.choice(["apple", "banana", "orange"]))

# Import datetime
import datetime
now = datetime.datetime.now()
print("Current time:", now)
            </div>
            
            <h4>Popular Modules:</h4>
            <ul>
                <li><span class="highlight">math</span> - Mathematical functions</li>
                <li><span class="highlight">random</span> - Random numbers</li>
                <li><span class="highlight">datetime</span> - Date and time</li>
                <li><span class="highlight">os</span> - Operating system</li>
            </ul>
        `,
        exercise: {
            question: "Generate a random number between 1 and 100",
            hint: "Import random and use randint()",
            solution: 'import random\nnumber = random.randint(1, 100)\nprint(number)',
            starterCode: '# Import random module\n\n# Generate random number\n'
        }
    },
    {
        id: 14,
        title: "Classes 🏗️",
        content: `
            <h3>Object-Oriented Programming with Classes 🏗️</h3>
            <p>Classes are like blueprints for creating objects!</p>
            
            <div class="code-example">
# Define a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print(self.name, "says: Woof!")
    
    def birthday(self):
        self.age = self.age + 1
        print(self.name, "is now", self.age, "years old!")

# Create objects (instances)
my_dog = Dog("Buddy", 3)
my_dog.bark()
my_dog.birthday()
            </div>
            
            <h4>Class Concepts:</h4>
            <ul>
                <li><span class="highlight">__init__</span> - Constructor method</li>
                <li><span class="highlight">self</span> - Reference to object</li>
                <li><span class="highlight">methods</span> - Functions in class</li>
            </ul>
        `,
        exercise: {
            question: "Create a Car class with name and color, then create a car object",
            hint: "Use class, __init__, and self",
            solution: 'class Car:\n    def __init__(self, name, color):\n        self.name = name\n        self.color = color\n\nmy_car = Car("Toyota", "red")\nprint(my_car.name, my_car.color)',
            starterCode: '# Create Car class\n\n# Create car object\n'
        }
    },
    {
        id: 15,
        title: "Tuples & Sets 🔗",
        content: `
            <h3>More Data Structures: Tuples and Sets 🔗</h3>
            <p>Tuples are like lists but can't be changed. Sets store unique items!</p>
            
            <div class="code-example">
# Tuples (immutable)
coordinates = (10, 20)
print("X:", coordinates[0], "Y:", coordinates[1])

# Multiple assignment
x, y = coordinates
print("X =", x, "Y =", y)

# Sets (unique items)
fruits = {"apple", "banana", "apple", "orange"}
print("Unique fruits:", fruits)

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print("Union:", set1 | set2)
print("Intersection:", set1 & set2)
            </div>
            
            <h4>Key Differences:</h4>
            <ul>
                <li><span class="highlight">Tuples</span> - Immutable, use ()</li>
                <li><span class="highlight">Sets</span> - Unique items, use {}</li>
                <li><span class="highlight">Lists</span> - Mutable, use []</li>
            </ul>
        `,
        exercise: {
            question: "Create a tuple with your coordinates and a set with unique colors",
            hint: "Use () for tuple, {} for set",
            solution: 'coords = (5, 10)\ncolors = {"red", "blue", "green"}\nprint("Coordinates:", coords)\nprint("Colors:", colors)',
            starterCode: '# Create tuple and set\n\n# Print them\n'
        }
    },
    {
        id: 16,
        title: "List Comprehensions ⚡",
        content: `
            <h3>Quick List Creation with Comprehensions ⚡</h3>
            <p>List comprehensions are a fast way to create lists!</p>
            
            <div class="code-example">
# Traditional way
squares = []
for i in range(5):
    squares.append(i ** 2)
print("Squares:", squares)

# List comprehension way
squares = [i ** 2 for i in range(5)]
print("Squares:", squares)

# With condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
print("Even squares:", even_squares)

# String comprehension
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
print("Upper names:", upper_names)
            </div>
            
            <h4>Comprehension Syntax:</h4>
            <ul>
                <li><span class="highlight">[expression for item in iterable]</span></li>
                <li><span class="highlight">[expression for item in iterable if condition]</span></li>
                <li>Faster and more readable than loops!</li>
            </ul>
        `,
        exercise: {
            question: "Create a list of even numbers from 0 to 10 using comprehension",
            hint: "Use [i for i in range(11) if i % 2 == 0]",
            solution: 'even_numbers = [i for i in range(11) if i % 2 == 0]\nprint(even_numbers)',
            starterCode: '# Create list of even numbers\n'
        }
    },
    {
        id: 17,
        title: "Lambda Functions 🚀",
        content: `
            <h3>Quick Functions with Lambda 🚀</h3>
            <p>Lambda functions are short, one-line functions!</p>
            
            <div class="code-example">
# Regular function
def add_five(x):
    return x + 5

# Lambda function (same thing)
add_five = lambda x: x + 5

print("Regular:", add_five(3))
print("Lambda:", add_five(3))

# Lambda with multiple parameters
multiply = lambda x, y: x * y
print("Multiply:", multiply(4, 5))

# Lambda with filter
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", even_numbers)

# Lambda with map
squared = list(map(lambda x: x ** 2, numbers))
print("Squared:", squared)
            </div>
            
            <h4>Lambda Features:</h4>
            <ul>
                <li><span class="highlight">lambda parameters: expression</span></li>
                <li>Can only have one expression</li>
                <li>Great for simple operations</li>
            </ul>
        `,
        exercise: {
            question: "Create a lambda function that doubles a number",
            hint: "Use lambda x: x * 2",
            solution: 'double = lambda x: x * 2\nprint(double(5))',
            starterCode: '# Create lambda function\n\n# Test it\n'
        }
    },
    {
        id: 18,
        title: "Decorators 🎨",
        content: `
            <h3>Function Decorators 🎨</h3>
            <p>Decorators modify functions without changing their code!</p>
            
            <div class="code-example">
# Simple decorator
def timer(func):
    def wrapper():
        print("Starting function...")
        func()
        print("Function finished!")
    return wrapper

# Using decorator
@timer
def greet():
    print("Hello, World!")

greet()

# Decorator with parameters
def repeat(times):
    def decorator(func):
        def wrapper():
            for _ in range(times):
                func()
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")
            </div>
            
            <h4>Decorator Uses:</h4>
            <ul>
                <li><span class="highlight">@decorator</span> - Apply decorator</li>
                <li>Timing functions</li>
                <li>Logging</li>
                <li>Validation</li>
            </ul>
        `,
        exercise: {
            question: "Create a decorator that prints 'BEFORE' and 'AFTER' around a function",
            hint: "Use nested functions and @decorator syntax",
            solution: 'def my_decorator(func):\n    def wrapper():\n        print("BEFORE")\n        func()\n        print("AFTER")\n    return wrapper\n\n@my_decorator\ndef test():\n    print("Hello!")\n\ntest()',
            starterCode: '# Create decorator\n\n# Test decorator\n'
        }
    },
    {
        id: 19,
        title: "Generators 🔄",
        content: `
            <h3>Memory-Efficient Iterators with Generators 🔄</h3>
            <p>Generators create values one at a time, saving memory!</p>
            
            <div class="code-example">
# Regular function (creates full list)
def get_numbers():
    return [1, 2, 3, 4, 5]

# Generator function (creates one at a time)
def get_numbers_gen():
    for i in range(1, 6):
        yield i

# Using generator
for num in get_numbers_gen():
    print(num)

# Generator expression
squares = (x ** 2 for x in range(5))
print("Generator squares:", list(squares))

# Infinite generator
def infinite_counter():
    i = 0
    while True:
        yield i
        i += 1

# Use first 5 values
counter = infinite_counter()
for _ in range(5):
    print(next(counter))
            </div>
            
            <h4>Generator Benefits:</h4>
            <ul>
                <li><span class="highlight">yield</span> - Returns value and pauses</li>
                <li>Memory efficient</li>
                <li>Lazy evaluation</li>
                <li>Great for large datasets</li>
            </ul>
        `,
        exercise: {
            question: "Create a generator that yields even numbers from 0 to 10",
            hint: "Use yield in a for loop with if condition",
            solution: 'def even_numbers():\n    for i in range(11):\n        if i % 2 == 0:\n            yield i\n\nfor num in even_numbers():\n    print(num)',
            starterCode: '# Create even numbers generator\n\n# Use the generator\n'
        }
    },
    {
        id: 20,
        title: "Context Managers 🛡️",
        content: `
            <h3>Safe Resource Management with Context Managers 🛡️</h3>
            <p>Context managers automatically handle setup and cleanup!</p>
            
            <div class="code-example">
# Custom context manager
class Timer:
    def __init__(self, name):
        self.name = name
    
    def __enter__(self):
        print(f"Starting {self.name}...")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Finished {self.name}!")

# Using context manager
with Timer("my_task"):
    print("Doing work...")

# File handling (built-in context manager)
with open("test.txt", "w") as f:
    f.write("Hello!")

# Multiple context managers
with open("input.txt", "r") as input_file, open("output.txt", "w") as output_file:
    content = input_file.read()
    output_file.write(content.upper())
            </div>
            
            <h4>Context Manager Features:</h4>
            <ul>
                <li><span class="highlight">__enter__</span> - Setup code</li>
                <li><span class="highlight">__exit__</span> - Cleanup code</li>
                <li>Automatic resource management</li>
                <li>Error handling</li>
            </ul>
        `,
        exercise: {
            question: "Create a context manager that prints 'START' and 'END'",
            hint: "Use __enter__ and __exit__ methods",
            solution: 'class MyContext:\n    def __enter__(self):\n        print("START")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("END")\n\nwith MyContext():\n    print("Working...")',
            starterCode: '# Create context manager\n\n# Use context manager\n'
        }
    },
    {
        id: 21,
        title: "Mini Project: Calculator 🧮",
        content: `
            <h3>Build a Simple Calculator! 🧮</h3>
            <p>Let's combine everything we've learned to build a calculator!</p>
            
            <div class="code-example">
def calculator():
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract") 
    print("3. Multiply")
    print("4. Divide")
    
    choice = input("Enter choice (1-4): ")
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    
    if choice == '1':
        result = num1 + num2
    elif choice == '2':
        result = num1 - num2
    elif choice == '3':
        result = num1 * num2
    elif choice == '4':
        if num2 != 0:
            result = num1 / num2
        else:
            return "Error: Cannot divide by zero!"
    else:
        return "Invalid choice!"
    
    return f"Result: {result}"

# Run calculator
print(calculator())
            </div>
            
            <h4>Project Features:</h4>
            <ul>
                <li>User input handling</li>
                <li>Error checking</li>
                <li>Functions and control flow</li>
                <li>String formatting</li>
            </ul>
        `,
        exercise: {
            question: "Add a 'power' operation (5) to the calculator",
            hint: "Add elif choice == '5': with num1 ** num2",
            solution: 'def calculator():\n    print("Simple Calculator")\n    print("1. Add")\n    print("2. Subtract") \n    print("3. Multiply")\n    print("4. Divide")\n    print("5. Power")\n    \n    choice = input("Enter choice (1-5): ")\n    num1 = float(input("Enter first number: "))\n    num2 = float(input("Enter second number: "))\n    \n    if choice == "1":\n        result = num1 + num2\n    elif choice == "2":\n        result = num1 - num2\n    elif choice == "3":\n        result = num1 * num2\n    elif choice == "4":\n        if num2 != 0:\n            result = num1 / num2\n        else:\n            return "Error: Cannot divide by zero!"\n    elif choice == "5":\n        result = num1 ** num2\n    else:\n        return "Invalid choice!"\n    \n    return f"Result: {result}"\n\nprint(calculator())',
            starterCode: '# Add power operation to calculator\n'
        }
    },
    {
        id: 22,
        title: "Mini Project: Quiz Game 🎮",
        content: `
            <h3>Create an Interactive Quiz Game! 🎮</h3>
            <p>Build a quiz game using dictionaries and loops!</p>
            
            <div class="code-example">
def quiz_game():
    questions = {
        "What is the capital of France?": "Paris",
        "What is 2 + 2?": "4",
        "What color is the sky?": "Blue"
    }
    
    score = 0
    total = len(questions)
    
    print("Welcome to the Quiz Game!")
    print("=" * 30)
    
    for question, answer in questions.items():
        print(f"\\nQuestion: {question}")
        user_answer = input("Your answer: ").strip()
        
        if user_answer.lower() == answer.lower():
            print("Correct! ✅")
            score += 1
        else:
            print(f"Wrong! The answer was: {answer} ❌")
    
    print(f"\\nGame Over! You got {score}/{total} correct!")
    
    percentage = (score / total) * 100
    if percentage >= 80:
        print("Excellent! 🌟")
    elif percentage >= 60:
        print("Good job! 👍")
    else:
        print("Keep practicing! 📚")

# Run quiz
quiz_game()
            </div>
            
            <h4>Game Features:</h4>
            <ul>
                <li>Dictionary for questions</li>
                <li>Score tracking</li>
                <li>User input validation</li>
                <li>Performance feedback</li>
            </ul>
        `,
        exercise: {
            question: "Add a new question about Python to the quiz",
            hint: "Add a new key-value pair to the questions dictionary",
            solution: 'questions = {\n    "What is the capital of France?": "Paris",\n    "What is 2 + 2?": "4",\n    "What color is the sky?": "Blue",\n    "What programming language are we learning?": "Python"\n}',
            starterCode: '# Add Python question to quiz\n'
        }
    },
    {
        id: 23,
        title: "Mini Project: To-Do List 📝",
        content: `
            <h3>Build a To-Do List Manager! 📝</h3>
            <p>Create a program to manage your tasks!</p>
            
            <div class="code-example">
def todo_list():
    tasks = []
    
    while True:
        print("\\n=== TO-DO LIST ===")
        print("1. Add task")
        print("2. View tasks")
        print("3. Mark as done")
        print("4. Exit")
        
        choice = input("Enter choice (1-4): ")
        
        if choice == "1":
            task = input("Enter task: ")
            tasks.append({"task": task, "done": False})
            print("Task added!")
            
        elif choice == "2":
            if not tasks:
                print("No tasks yet!")
            else:
                print("\\nYour tasks:")
                for i, item in enumerate(tasks, 1):
                    status = "✅" if item["done"] else "⏳"
                    print(f"{i}. {status} {item['task']}")
                    
        elif choice == "3":
            if not tasks:
                print("No tasks to mark!")
            else:
                try:
                    index = int(input("Enter task number: ")) - 1
                    if 0 <= index < len(tasks):
                        tasks[index]["done"] = True
                        print("Task marked as done!")
                    else:
                        print("Invalid task number!")
                except ValueError:
                    print("Please enter a number!")
                    
        elif choice == "4":
            print("Goodbye!")
            break
            
        else:
            print("Invalid choice!")

# Run to-do list
todo_list()
            </div>
            
            <h4>Features:</h4>
            <ul>
                <li>Add new tasks</li>
                <li>View all tasks</li>
                <li>Mark tasks as complete</li>
                <li>Error handling</li>
            </ul>
        `,
        exercise: {
            question: "Add a 'Delete task' option (5) to the to-do list",
            hint: "Add elif choice == '5': with list.pop()",
            solution: 'elif choice == "5":\n    if not tasks:\n        print("No tasks to delete!")\n    else:\n        try:\n            index = int(input("Enter task number: ")) - 1\n            if 0 <= index < len(tasks):\n                deleted = tasks.pop(index)\n                print(f"Deleted: {deleted[\'task\']}")\n            else:\n                print("Invalid task number!")\n        except ValueError:\n            print("Please enter a number!")',
            starterCode: '# Add delete task option\n'
        }
    },
    {
        id: 24,
        title: "Advanced: Web Scraping 🌐",
        content: `
            <h3>Extract Data from Websites! 🌐</h3>
            <p>Learn to get information from the internet using Python!</p>
            
            <div class="code-example">
# First install: pip install requests beautifulsoup4

import requests
from bs4 import BeautifulSoup

def scrape_weather():
    # Get weather data (example)
    url = "https://httpbin.org/html"
    response = requests.get(url)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all headings
        headings = soup.find_all('h1')
        print("Found headings:")
        for heading in headings:
            print(f"- {heading.text.strip()}")
    else:
        print("Failed to get data")

# Note: This is a simplified example
# Real web scraping requires understanding of HTML structure
            </div>
            
            <h4>Web Scraping Tools:</h4>
            <ul>
                <li><span class="highlight">requests</span> - Get web pages</li>
                <li><span class="highlight">BeautifulSoup</span> - Parse HTML</li>
                <li><span class="highlight">selenium</span> - Interactive websites</li>
                <li>Always respect robots.txt!</li>
            </ul>
        `,
        exercise: {
            question: "Create a function that counts words in a text string",
            hint: "Use text.split() to split into words",
            solution: 'def count_words(text):\n    words = text.split()\n    return len(words)\n\nprint(count_words("Hello world from Python"))',
            starterCode: '# Create word counter function\n'
        }
    },
    {
        id: 25,
        title: "Advanced: Data Analysis 📊",
        content: `
            <h3>Analyze Data with Python! 📊</h3>
            <p>Learn to work with data using pandas and matplotlib!</p>
            
            <div class="code-example">
# First install: pip install pandas matplotlib

import pandas as pd
import matplotlib.pyplot as plt

# Create sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['NYC', 'LA', 'Chicago', 'Boston']
}

# Create DataFrame
df = pd.DataFrame(data)
print("DataFrame:")
print(df)

# Basic statistics
print("\\nAge statistics:")
print(df['Age'].describe())

# Filter data
young_people = df[df['Age'] < 30]
print("\\nPeople under 30:")
print(young_people)

# Group by city
city_counts = df['City'].value_counts()
print("\\nPeople per city:")
print(city_counts)

# Simple plot (if matplotlib is available)
try:
    df['Age'].plot(kind='hist', title='Age Distribution')
    plt.show()
except:
    print("Plotting not available in this environment")
            </div>
            
            <h4>Data Analysis Tools:</h4>
            <ul>
                <li><span class="highlight">pandas</span> - Data manipulation</li>
                <li><span class="highlight">matplotlib</span> - Plotting</li>
                <li><span class="highlight">numpy</span> - Numerical computing</li>
                <li><span class="highlight">seaborn</span> - Statistical plots</li>
            </ul>
        `,
        exercise: {
            question: "Create a simple list of numbers and calculate their average",
            hint: "Use sum() and len() functions",
            solution: 'numbers = [10, 20, 30, 40, 50]\naverage = sum(numbers) / len(numbers)\nprint(f"Average: {average}")',
            starterCode: '# Create list and calculate average\n'
        }
    }
];

// Global variables
let currentLesson = 0;
let completedLessons = [];
let currentExercise = null;

// Initialize the course
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing course...');
    checkAuthStatus();
    loadLessons();
    updateProgress();
    console.log('Course initialization complete');
});

// Authentication functions
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
        const userData = JSON.parse(user);
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('user-info').style.display = 'inline';
    }
}

function logout() {
    const token = localStorage.getItem('token');
    
    if (token) {
        fetch('http://localhost:5000/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        }).catch(error => console.error('Logout error:', error));
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Load lessons into navigation
function loadLessons() {
    console.log('Loading lessons...');
    const lessonList = document.getElementById('lesson-list');
    console.log('Lesson list element:', lessonList);
    console.log('Number of lessons:', pythonLessons.length);
    
    lessonList.innerHTML = '';
    
    pythonLessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item';
        lessonItem.textContent = lesson.title;
        lessonItem.onclick = () => loadLesson(index);
        
        if (completedLessons.includes(lesson.id)) {
            lessonItem.classList.add('completed');
        }
        
        lessonList.appendChild(lessonItem);
        console.log('Added lesson:', lesson.title);
    });
    
    console.log('Lessons loaded successfully');
}

// Start the course
function startCourse() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('code-section').style.display = 'block';
    loadLesson(0);
}

// Load a specific lesson
function loadLesson(lessonIndex) {
    currentLesson = lessonIndex;
    const lesson = pythonLessons[lessonIndex];
    
    // Update lesson navigation
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === lessonIndex) {
            item.classList.add('active');
        }
    });
    
    // Load lesson content
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = lesson.content;
    
    // Load exercise
    currentExercise = lesson.exercise;
    loadExercise();
    
    // Set starter code
    document.getElementById('code-input').value = currentExercise.starterCode;
    
    // Show code editor and exercise
    document.getElementById('code-section').style.display = 'block';
    document.getElementById('exercise-section').style.display = 'block';
}

// Load exercise
function loadExercise() {
    const exerciseContent = document.getElementById('exercise-content');
    exerciseContent.innerHTML = `
        <p><strong>Exercise:</strong> ${currentExercise.question}</p>
    `;
}

// Run Python code (simplified version)
function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output');
    
    try {
        // Simple Python code execution simulation
        let result = simulatePythonExecution(code);
        output.textContent = result;
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}

// Simulate Python execution (basic)
function simulatePythonExecution(code) {
    let output = '';
    const lines = code.split('\n');
    
    for (let line of lines) {
        line = line.trim();
        
        // Handle print statements
        if (line.startsWith('print(') && line.endsWith(')')) {
            const content = line.slice(6, -1);
            if (content.startsWith('"') && content.endsWith('"')) {
                output += content.slice(1, -1) + '\n';
            } else {
                output += content + '\n';
            }
        }
        
        // Handle input simulation
        if (line.includes('input(')) {
            output += 'User input: [simulated]\n';
        }
        
        // Handle basic math
        if (line.includes('=') && !line.includes('input')) {
            // Simple variable assignment simulation
            const parts = line.split('=');
            if (parts.length === 2) {
                const varName = parts[0].trim();
                const value = parts[1].trim();
                if (value.includes('+') || value.includes('-') || value.includes('*') || value.includes('/')) {
                    try {
                        const result = eval(value);
                        output += `${varName} = ${result}\n`;
                    } catch (e) {
                        output += `${varName} = ${value}\n`;
                    }
                } else {
                    output += `${varName} = ${value}\n`;
                }
            }
        }
    }
    
    return output || 'Code executed successfully!';
}

// Reset code editor
function resetCode() {
    if (currentExercise) {
        document.getElementById('code-input').value = currentExercise.starterCode;
    }
    document.getElementById('code-output').textContent = '';
}

// Check exercise answer
function checkAnswer() {
    const userCode = document.getElementById('code-input').value;
    const solution = currentExercise.solution;
    
    // Simple answer checking
    if (userCode.includes(solution.split('\n')[0]) || userCode.includes('print(')) {
        alert('🎉 Great job! Your answer looks correct!');
        completeLesson();
    } else {
        alert('🤔 Not quite right. Try again or get a hint!');
    }
}

// Show hint
function showHint() {
    alert(`💡 Hint: ${currentExercise.hint}`);
}

// Complete current lesson
function completeLesson() {
    const lesson = pythonLessons[currentLesson];
    if (!completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
        updateProgress();
        loadLessons(); // Refresh lesson list to show completion
        
        // Move to next lesson if available
        if (currentLesson < pythonLessons.length - 1) {
            setTimeout(() => {
                loadLesson(currentLesson + 1);
            }, 1000);
        }
    }
}

// Update progress bar
function updateProgress() {
    const progress = (completedLessons.length / pythonLessons.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = Math.round(progress) + '% Complete';
}

// AI Widget Functions
let aiChatOpen = false;

function toggleAIChat() {
    const chatContainer = document.getElementById('ai-chat-container');
    const widgetButton = document.getElementById('ai-widget-button');
    
    if (aiChatOpen) {
        chatContainer.classList.remove('show');
        widgetButton.classList.remove('expanded');
        aiChatOpen = false;
    } else {
        chatContainer.classList.add('show');
        widgetButton.classList.add('expanded');
        aiChatOpen = true;
        document.getElementById('ai-chat-input').focus();
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
    
    if (!message) return;
    
    // Add user message
    addAIMessage(message, 'user');
    input.value = '';
    
    // Disable send button while processing
    const sendButton = document.getElementById('ai-chat-send');
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    // Send to AI backend
    fetch('http://localhost:5000/ai-tutor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_input: message })
    })
    .then(response => response.json())
    .then(data => {
        addAIMessage(data.reply, 'ai');
    })
    .catch(error => {
        console.error('AI Chat Error:', error);
        addAIMessage('Sorry! Something went wrong. 😅', 'ai');
    })
    .finally(() => {
        sendButton.disabled = false;
        sendButton.textContent = 'Send';
    });
}

function addAIMessage(message, sender) {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.textContent = message;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
