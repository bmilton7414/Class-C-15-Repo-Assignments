/////////////////////////////////////Loop Constructs///////////////

// Loops allow you to repeat a block of code multiple times based on a condition or over an iterable.
// They are essential for tasks like traversing arrays, generating sequences, polling until a state changes, and more.
// Key loop components:
// • initialization: sets up loop variables (runs once)  
// • condition: evaluated before each iteration (truthy → body runs; falsy → loop ends)  
// • update: runs after each iteration to move toward termination  

///////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////for Loop///////////////////////////////////////////////

// Structure:
// for (initialization; condition; update) {
//     // body: code to run each iteration
// }

// 1. initialization: executed once before the loop begins (e.g., let i = 0).  
// 2. condition: checked before each iteration; loop continues only if truthy.  
// 3. update: executed after each iteration (e.g., i++), advancing toward loop exit.  
// Benefits:
// • Compact syntax for counted loops  
// • Precise control over start, end, and step  
// Risks:
// • Off-by-one errors if boundaries mis-specified  
// • Infinite loops if update doesn’t change condition  

// Example: Counting from 0 to 5
for (let i = 0; i <= 5; i++) {
  console.log(`Iteration ${i}`); 
  // i starts at 0
  // loop runs while i <= 5
  // after each pass, i increments by 1
}

///////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////while Loop///////////////////////////////////////

// Structure:
// while (condition) {
//     // body: code to run as long as condition is truthy
// }

// • condition is evaluated before each iteration.  
// • body may never run if condition is initially falsy.  
// Use Cases:
// • When number of iterations isn’t known in advance  
// • Polling or waiting for an external state  
// Risks:
// • Must modify variables used in condition inside body to avoid infinite loops  

// Example: Countdown from 3
let count = 3;
while (count > 0) {
  console.log(`Counting down: ${count}`);
  count--;  // decrement to ensure loop eventually stops
}

///////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////do…while Loop////////////////////////////////////

// Structure:
// do {
//     // body: code that runs at least once
// } while (condition);

// • body executes once before the first condition check.  
// • continues as long as condition remains truthy.  
// Use Cases:
// • Prompting user input until valid (ensures prompt runs at least once)  
// • Performing an action before verifying exit criteria  

// Example: Prompt until non-empty input
let input;
do {
  input = prompt("Enter a non-empty string:"); // prompt blocks until user responds
} while (!input);
console.log("You entered:", input);

///////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////for…of Loop//////////////////////////////////////////////

// Structure:
// for (const element of iterable) {
//     // body: code using each element
// }

// • Works on any iterable (Array, String, Map, Set, etc.).  
// • Retrieves values directly, no manual index needed.  
// Benefits:
// • Cleaner syntax than classic for loops for collections  
// • Avoids off-by-one and index-access errors  
// Limitations:
// • Cannot break out with a return from outer function without extra code  
// • Doesn’t expose index by default (use Array.entries() to get [index, value])  

// Example: Traverse an array of fruits
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////break/////////////////////////////////////

// The `break` statement exits the *closest* enclosing loop immediately,
// skipping any remaining iterations and continuing execution after the loop.
// Use Cases:
// • Early exit when a target condition is met  
// • Optimizing performance by avoiding unnecessary iterations  

// Example: Stop at first multiple of 7 between 1 and 20
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log(`Found multiple of 7: ${i}`);
    break;  // exit the loop at the first match
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////continue///////////////////////////////////////

// The `continue` statement skips the remainder of the current iteration
// and jumps directly to the next iteration’s condition check.
// Use Cases:
// • Filtering: skip unwanted values without nested ifs  
// • Cleaner loops by handling exceptions up front  

// Example: Print only odd numbers 1–10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // skip even numbers
  }
  console.log(`Odd number: ${i}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ...........................To Do Exercises.............................

// 1. Use a `for` loop to print even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 2. Use a `for` loop to print odd numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 3. Use a `for` loop to calculate and print the sum of all numbers from 0 to 100
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log("Sum of 0–100:", total);

///////////////////////////////////////////////////////////////////////////////////////////////
// ...........................Challenge Exercise.............................

let countries = [
  "ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA",
  "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"
];

// Create an array of the lengths of each country name using a loop
const countryLengths = [];
for (const country of countries) {
  countryLengths.push(country.length);
}
console.log(countryLengths);  // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

///////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////// Additional Notes & Best Practices /////////////////////////////////

// • Always ensure your loop’s condition will eventually become falsy, or include a `break`.  
// • Prefer `for…of` when iterating arrays for readability and avoiding off-by-one errors.  
// • Use `continue` sparingly to skip unwanted cases; excessive use can reduce clarity.  
// • Extract complex loop bodies into well-named functions to improve maintainability.  
// • For array transformations, consider declarative methods (`.map()`, `.filter()`, `.reduce()`).  
// • `forEach` is useful for side effects but cannot `break` or `continue`.  
// • Nested loops can be performance-intensive—flatten data or optimize logic when possible.  
// • Always test loops with edge cases (empty arrays, large datasets) to ensure correctness and performance.  
// • When using `for…in` on objects, always guard with `hasOwnProperty` to avoid inherited properties.  
// • Document complex loops with descriptive comments explaining the loop invariant and exit conditions.  
// • For async operations in loops, consider `for…of` with `await`, or use `Promise.all` for parallelism.  
