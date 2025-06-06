/////////////////////////////////////JS Functions///////////////////////////////
// Functions are named, reusable blocks of code. They help organize logic,
// avoid repetition, and encapsulate behavior. In JavaScript, functions are
// first-class values: you can assign them to variables, pass them as arguments,
// return them from other functions, and store them in data structures.

////////////////////////////////////////////////////////////////////////////////
// 1. Function Declaration
// -----------------------
// A function declared with the `function` keyword and a name.
// Function declarations are hoisted: the entire function definition is moved
// to the top of its scope at runtime, so you can call it before its declaration.

function sayHello() {
  console.log("Hello, world!"); 
}
sayHello(); // Outputs "Hello, world!" even if called before the declaration.

////////////////////////////////////////////////////////////////////////////////
// 2. Function without parameters and without return
// -------------------------------------------------
// Such functions perform side effects (logging, DOM manipulation, I/O) but
// implicitly return `undefined` if no `return` is specified.

function logCurrentTime() {
  // Uses the Date API to get current time string.
  console.log("Current time:", new Date().toLocaleTimeString());
}
logCurrentTime(); // e.g., "Current time: 2:34:56 PM"

////////////////////////////////////////////////////////////////////////////////
// 3. Function returning a value
// ------------------------------
// Use `return` to send data back to the caller. After `return`, no further
// code in the function executes.

function getRandomNumber() {
  // Math.random() produces a float in [0,1)
  return Math.random();
}
let rand = getRandomNumber();
console.log("Random:", rand);

////////////////////////////////////////////////////////////////////////////////
// 4. Function with a single parameter
// -----------------------------------
// Parameters are local variable names defined in the function signature.
// The argument is the actual value passed in when calling.

function greet(name) {
  // `name` is undefined if no argument provided.
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet());        // "Hello, undefined!" (avoid by defaulting)

////////////////////////////////////////////////////////////////////////////////
// 5. Function with two parameters
// --------------------------------
// Order matters: arguments match parameters by position.

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));    // 5
console.log(add(2));       // NaN, because b is undefined

////////////////////////////////////////////////////////////////////////////////
// 6. Function with many parameters
// --------------------------------
// When a function takes >3 parameters, consider passing an options object
// for readability and to avoid positional bugs.

function createUser(username, email, role, isActive) {
  // Shorthand property assignment builds an object.
  return { username, email, role, isActive };
}
console.log(createUser("jsmith", "jsmith@example.com", "admin", true));

////////////////////////////////////////////////////////////////////////////////
// 7. Function with unlimited parameters (rest parameters)
// -------------------------------------------------------
// The rest syntax `...nums` bundles all extra arguments into an array.
// Rest must be the last parameter.

function sumAll(...nums) {
  // nums is an Array of all passed arguments.
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Arrow function equivalent with implicit return and rest:
const multiplyAll = (...nums) => nums.reduce((acc, n) => acc * n, 1);
console.log(multiplyAll(2, 3, 4)); // 24

////////////////////////////////////////////////////////////////////////////////
// 8. Anonymous Function
// ---------------------
// A function without a name; often used inline as callbacks. Not hoisted.

setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

////////////////////////////////////////////////////////////////////////////////
// 9. Function Expression
// ----------------------
// A function assigned to a variable. The function can be named or anonymous.
// Function expressions are not hoisted; you must define them before calling.

const square = function(x) {
  return x * x;
};
console.log(square(5)); // 25

////////////////////////////////////////////////////////////////////////////////
// 10. Self-Invoking Function (IIFE)
// ---------------------------------
// Immediately Invoked Function Expression runs as soon as it’s defined.
// Creates a private scope, avoiding global pollution.

(function() {
  console.log("IIFE executed!");
})(); 

////////////////////////////////////////////////////////////////////////////////
// 11. Arrow Function
// ------------------
// Introduced in ES6. Concise syntax, implicit return when body is an expression,
// and lexical `this`/`arguments` (they don’t create their own).

const double = x => x * 2;
console.log(double(7)); // 14

// Block body arrow needs explicit return:
const maxOfThree = (a, b, c) => {
  const maxAB = a > b ? a : b;
  return maxAB > c ? maxAB : c;
};
console.log(maxOfThree(5, 12, 9)); // 12

////////////////////////////////////////////////////////////////////////////////
// 12. Function with Default Parameters
// ------------------------------------
// Provide default values for parameters if arguments are omitted or undefined.

function formatDate(date = new Date(), locale = "en-US") {
  // date defaults to current Date; locale defaults to "en-US"
  return date.toLocaleDateString(locale);
}
console.log(formatDate());               // today's date in en-US
console.log(formatDate(undefined, "de")); // German locale format

////////////////////////////////////////////////////////////////////////////////
// 13. Function Declaration vs. Arrow Function
// -------------------------------------------
// Declarations are hoisted and create their own `this` and `arguments`.
// Arrow functions are expressions, not hoisted, and capture `this` lexically.

function multiply(a, b) {
  console.log(this); // dynamic `this` based on call site
  return a * b;
}

const multiplyArrow = (a, b) => {
  console.log(this); // `this` is inherited from surrounding scope
  return a * b;
};

console.log(multiply(4, 5), multiplyArrow(4, 5)); // 20 20

////////////////////////////////////////////////////////////////////////////////
// 14. Closures
// ------------
// Functions remember the scope in which they were created, even after that scope
// has finished executing. Useful for data privacy and factories.

function makeCounter() {
  let count = 0; // private variable
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

////////////////////////////////////////////////////////////////////////////////
// 15. Higher-Order Functions
// --------------------------
// Functions that take other functions as arguments or return functions.

function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(3, 4, multiply)); // 12

// Array HOF examples:
const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2));            // [2,4,6,8,10]
console.log(nums.filter(n => n % 2 === 0));   // [2,4]
console.log(nums.reduce((s, n) => s + n, 0)); // 15

////////////////////////////////////////////////////////////////////////////////
// 16. Recursion
// ------------
// A function calling itself to solve smaller subproblems. Must have a base case.

function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive step
}
console.log(factorial(5)); // 120

////////////////////////////////////////////////////////////////////////////////
// Summary and Best Practices
// --------------------------
// • Always declare parameters you expect; use defaults to avoid undefined.
// • Keep functions focused: one responsibility per function.
// • Use arrow functions for callbacks and methods where you need lexical `this`.
// • Avoid IIFEs if using ES modules—import/export handles scoping.
// • Leverage closures for data privacy, but be mindful of memory.
// • Use higher-order functions for declarative iteration over arrays.
// • For complex parameter lists, prefer an options object over many positional args.
