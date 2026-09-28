# BlendedJavaScript

A learning project containing practice exercises from the blended JavaScript course sessions. Each lesson is a separate script with a set of small tasks, with the task descriptions written as comments (in Ukrainian) above the solutions.

## 📋 About

The project covers core JavaScript topics, progressing lesson by lesson:

- **Lesson 1 — Basics: conditions, loops, functions.**
  - User input with `prompt()` and output with `alert()` / `console.log()`, converting input with `Number()`.
  - Conditional logic: number check, determining which quarter of an hour a minute value falls into, a simple login/password check.
  - Formatting minutes as `HH:MM` using `padStart()`.
  - Loops and functions: `getNumbers(min, max)` (descending output plus the sum of even numbers) and `fizzBuzz(num)`.
- **Lesson 2 — Arrays, objects, and functions.**
  - Basic array methods (`push`, `indexOf`, `splice`) and element replacement.
  - Functions: `logItems`, `checkLogin`, `caclculateAverage(...args)` with rest parameters and type checks, `sumNumbers` (sums of neighboring elements), and `findSmallestNumber` with `Array.isArray()` validation.
  - Working with objects: adding and changing properties, iterating with `Object.keys()` and `for...of`.
- **Lesson 3 — Array methods and classes.**
  - Iteration and transformation methods: `map`, `flatMap`, `some`, `every`, `find`, and `reduce`.
  - A `Calculator` class with method chaining (`number`, `add`, `subtract`, `multiply`, `divide`, `getResult`).

## 🛠️ Tech Stack

- Vanilla JavaScript (ES modules, ES6+ features, classes)
- HTML5

## 📁 Project Structure

```
BlendedJavaScript-main/
├── js/
│   ├── lesson-1.js   # Conditions, loops, functions, prompt/alert
│   ├── lesson-2.js   # Arrays, objects, functions
│   └── lesson-3.js   # Array methods, Calculator class
└── index.html          # Loads a lesson script as an ES module
```

## 🚀 Getting Started

`index.html` loads one lesson script at a time. Currently `lesson-3.js` is enabled; to run a different lesson, uncomment its `<script>` tag in `index.html` and comment out the others. Then open `index.html` in a browser and check the browser console (DevTools) for the output. Lessons 1 and 2 also use `prompt()` and `alert()` dialogs.
