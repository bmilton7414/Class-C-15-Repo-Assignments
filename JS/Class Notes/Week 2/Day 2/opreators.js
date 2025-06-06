///////////////////////////////////////////////Welcome To Operators///////////////////////////////
///////////////////////////////////////////Primitive operations/////////////////////////////

// In JavaScript, **operators** perform operations on values (operands).
// They can be grouped into several categories: assignment, arithmetic, comparison, increment/decrement, and logical.

///////////////////////////////////////////////////////////////////////////////////////////////
// 1. Assignment Operators

// The single equal sign `=` assigns the value on its right to the variable on its left.
let country = "USA";      // country now holds the string "USA"

// Combined assignment operators perform an operation and assignment in one step:
let x = 5;                // initialize x with 5
x += 3;                   // equivalent to x = x + 3
console.log(x);           // logs: 8
x -= 2;                   // x = x - 2
console.log(x);           // logs: 6
x *= 4;                   // x = x * 4
console.log(x);           // logs: 24
x /= 6;                   // x = x / 6
console.log(x);           // logs: 4
x %= 3;                   // x = x % 3 (remainder)
console.log(x);           // logs: 1
x **= 5;                  // x = x ** 5 (exponentiation)
console.log(x);           // logs: 1

/* Terms:
   - `+=, -=, *=, /=, %=, **=` are shorthand for common arithmetic plus assignment.
   - They modify the variable in place.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 2. Arithmetic Operators

// Basic math between two operands:
let a = 10, b = 3;
console.log("a + b =", a + b);   // addition: 13
console.log("a - b =", a - b);   // subtraction: 7
console.log("a * b =", a * b);   // multiplication: 30
console.log("a / b =", a / b);   // division: ~3.333
console.log("a % b =", a % b);   // modulus (remainder): 1
console.log("a ** b =", a ** b); // exponentiation: 1000

/* Terms:
   - `%` returns the remainder of integer division.
   - `**` raises the left operand to the power of the right.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 3. Comparison Operators

// Compare two values. Results are Booleans (true/false).
let num1 = 5, num2 = '5';
console.log(num1 == num2);   // loose equality: true (performs type coercion)
console.log(num1 === num2);  // strict equality: false (no coercion, types differ)
console.log(num1 != num2);   // loose inequality: false
console.log(num1 !== num2);  // strict inequality: true
console.log(num1 > 3);       // greater than: true
console.log(num1 < 10);      // less than: true
console.log(num1 >= 5);      // greater than or equal: true
console.log(num1 <= 4);      // less than or equal: false

/* Terms:
   - `==` compares value after coercion.
   - `===` compares value and type (recommended to avoid surprises).
   - `!=` and `!==` are the opposite of `==` and `===`.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 4. Increment and Decrement Operators

let counter = 0;

// Postfix increment:
console.log(counter++); // logs: 0 (returns old value, then increments)
console.log(counter);   // logs: 1

// Prefix increment:
console.log(++counter); // increments first (to 2), then returns 2

// Postfix decrement:
console.log(counter--); // logs: 2 (returns old), counter → 1
console.log(counter);   // logs: 1

// Prefix decrement:
console.log(--counter); // counter → 0, logs: 0

/* Terms:
   - `++` adds 1; `--` subtracts 1.
   - Prefix (`++x`) applies before evaluation; postfix (`x++`) applies after.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 5. Logical Operators

// Combine Boolean expressions to form more complex conditions.
let p = true, q = false;

console.log(p && q); // logical AND: true only if both are true → false
console.log(p || q); // logical OR: true if at least one is true → true
console.log(!p);     // logical NOT: inverts truth → false

// Common use in conditionals:
let hasKey = true, knowsPassword = false;
if (hasKey && knowsPassword) {
  console.log("Entry granted.");
} else {
  console.log("Access denied.");
}
// → "Access denied."

/* Terms:
   - `&&` (AND) returns true if both operands truthy.
   - `||` (OR) returns true if at least one operand truthy.
   - `!`  (NOT) flips a Boolean’s value.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 6. Ternary (Conditional) Operator

// A concise if/else expression: condition ? exprIfTrue : exprIfFalse
let ageCheck = (age >= 18) ? "Adult" : "Minor";
console.log(ageCheck); // logs: "Adult"

/* Terms:
   - Ternary operator is an expression, not a statement.
   - Use for simple, inline conditional assignments.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// Summary of Operators:
// - Assignment: =, +=, -=, *=, /=, %=, **=
// - Arithmetic: +, -, *, /, %, **
// - Comparison: ==, ===, !=, !==, >, <, >=, <=
// - Increment/Decrement: ++, --
// - Logical: &&, ||, !
// - Conditional (ternary): condition ? val1 : val2

///////////////////////////////////////////////////////////////////////////////////////////////
// Practice Exercises:
// 1. Use arithmetic operators to compute the area of a circle (πr²) for r = 7.
// 2. Compare two variables using strict equality and log a message.
// 3. Use a ternary operator to assign “even” or “odd” based on a number.
// 4. Write a conditional statement combining logical operators.
// 5. Demonstrate prefix vs. postfix increment in a loop.
