//////////////////////////// Primitive Data //////////////////////////

// JavaScript has **primitive** data types, which hold single, immutable values.
// They are stored **by value**, meaning each variable keeps its own copy.
// Primitives cannot be altered after creation; operations on them return new values.

// Numbers – integers and floating-point values:
let numOne = 3;        // integer literal
let numTwo = 3.14;     // floating-point literal
console.log(numOne, numTwo); // logs: 3 3.14
// • Term “literal”: a value written directly in code.
// • Number type covers both whole and fractional numbers.

// Strings – sequences of characters, wrapped in single ('…'), double ("…"), or backtick (`…`) quotes:
let greeting = "Hello, JavaScript!";
console.log(greeting); // logs: Hello, JavaScript!
// • Single vs. double quotes function identically.
// • Backticks (template literals) allow embedding: `\`${greeting}\``

// Booleans – logical values true or false:
let isActive = true;
let isComplete = false;
console.log(isActive, isComplete); // logs: true false
// • Used in conditional checks: if (isActive) { … }

// Null – explicitly “no value”:
let emptyValue = null;
console.log(emptyValue); // logs: null
// • typeof null === "object" — a known historical quirk.

// Undefined – a declared variable without an assigned value:
let notAssigned;
console.log(notAssigned); // logs: undefined
// • Also the default return value of functions without an explicit return.

// Symbol – a unique, immutable identifier created via the Symbol constructor:
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // logs: false
// • Even symbols with the same description are unique.
// • Useful as unique object property keys.

////////////////////////////////////////////////////////////////////////////////
// Primitive types are **immutable**. You cannot change their internal value:

let word = "JavaScript";
word[0] = "Y";       // attempt to change first character
console.log(word);   // logs: JavaScript
// • Strings behave like read-only arrays of characters.
// • Any “modification” returns a brand-new string instead.

////////////////////////////////////////////////////////////////////////////////
// Comparing primitives uses **value comparison**:

let a = 5;
let b = 5;
console.log(a === b); // logs: true — same numeric value

let js = 'JavaScript';
let py = 'Python';
console.log(js === py); // logs: false — different text

// • === checks both type and value.
// • == would perform type coercion (avoid in most code).

////////////////////////////////////////////////////////////////////////////////
//////////////////////// Non-primitive Data /////////////////////////////

// **Non-primitive** (reference) types hold complex data; variables point to locations in memory.
// Modifying one reference affects all references to that same object.

// Objects – collections of key–value pairs:
let userOne = {
  name: 'Shawn',
  role: 'Teaching Assistant',
  country: 'USA'
};
console.log(userOne.name); // logs: Shawn
// • Access via dot notation (userOne.name) or bracket notation (userOne['name']).

// Arrays – ordered lists of values (specialized objects):
let myArr = [4, 5, 8, 9];
console.log(myArr[2]); // logs: 8
console.log(myArr);    // logs: [4, 5, 8, 9]
// • Arrays use zero-based indexing: first element at index 0.

// Functions – callable blocks of code (also objects with properties):
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Shawn")); // logs: Hello, Shawn!
// • Functions can be passed around, stored in variables, and have their own scope.

////////////////////////////////////////////////////////////////////////////////
// Reference behavior and mutability:

let numsA = [1,2,3];
let numsB = [1,2,3];
console.log(numsA === numsB);  // logs: false — different array instances

let userTwo = userOne;
console.log(userOne === userTwo); // logs: true — same object reference

// Mutating one affects the other:
userTwo.role = 'Instructor';
console.log(userOne.role);       // logs: Instructor

////////////////////////////////////////////////////////////////////////////////
// Quick Comparison:

//                Primitive                | Non-Primitive (Reference)
// --------------------------------------------------------------------
// Storage        stored by value         | stored by reference (pointer)
// Mutability     immutable (no change)    | mutable (can change in place)
// Comparison     value-based (===)        | reference-based (=== checks same object)
// Examples       Number, String, Boolean  | Object, Array, Function

////////////////////////////////////////////////////////////////////////////////
// Use non-primitives when you need to:
// ✔️ Group related data (e.g., user profiles)
// ✔️ Collect multiple values (e.g., lists, matrices)
// ✔️ Encapsulate behavior (functions and methods)
// ✔️ Store complex structures with methods and properties
