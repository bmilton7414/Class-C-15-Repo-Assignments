///////////////////////////////////////////////Welcome To Booleans, Null, Undefined///////////////////////////////
///////////////////////////////////////////Primitive data types/////////////////////////////

// In JavaScript, Booleans, Null, and Undefined are three of the seven primitive types.
// Primitives are immutable (their value can’t be changed) and stored by value.

///////////////////////////////////////////////////////////////////////////////////////////////
// 1. Boolean – logical true/false values

// A Boolean can hold only one of two values: true or false.
let isLoggedIn    = false;  // user is not logged in
const hasPermission = true; // user has permission

// Booleans power conditional logic (if, while, ternary ? :):
let age     = 21;
let isAdult = (age >= 18);  // comparison returns true or false
console.log(isAdult);       // logs: true

// Use === for strict comparison:
console.log(isAdult === true);  // true

///////////////////////////////////////////////////////////////////////////////////////////////
// 2. Truthy and Falsy – when non-Boolean values behave like true/false in conditionals

// JavaScript coerces values to Boolean in contexts like `if(...)`. Values are either “truthy” or “falsy.”

// Falsy values (behave like false):
//   false, 0, '' or "", null, undefined, NaN
if (false)    console.log("never runs");
if (0)        console.log("never runs");
if ("")       console.log("never runs");
if (null)     console.log("never runs");
if (undefined)console.log("never runs");
if (NaN)      console.log("never runs");

// Everything else is truthy:
if ("hello") console.log("non-empty string is truthy");
if (42)      console.log("non-zero number is truthy");
if ({} )     console.log("empty object is truthy");
if ([])      console.log("empty array is truthy");
if (function(){}) console.log("function is truthy");

// Talking point: don’t rely on truthiness when you need exact value — use ===.

///////////////////////////////////////////////////////////////////////////////////////////////
// 3. Undefined – “no value ever assigned”

// A variable declared without initialization is undefined:
let foo;
console.log(foo);  // logs: undefined

// Accessing a non-existent array index or object property:
let allArr = [1, 2, 23];
console.log(allArr[3]);  // logs: undefined

let obj = {a:1};
console.log(obj.b);       // logs: undefined

// A function without return returns undefined:
function noReturn(){}
console.log(noReturn());  // logs: undefined

// Default parameters missing:
function greet(name, title){
  console.log(`${title} ${name}`);
}
greet("Alice");           // title is undefined, logs: "undefined Alice"

// Key point: undefined signals “never assigned.”

///////////////////////////////////////////////////////////////////////////////////////////////
// 4. Null – intentional absence of any object value

// Use null to explicitly clear a variable or indicate “no value.”
let selectedUser = null;
console.log(selectedUser); // logs: null

// Contrast to undefined: null means “I set this to nothing,” undefined means “not set.”

// Historical quirk:
console.log(typeof null);  // logs: "object" (legacy bug in JavaScript)

///////////////////////////////////////////////////////////////////////////////////////////////
// Summary of Boolean, Null, Undefined

// Data Type  | Values                     | Typical use
// ---------------------------------------------------------------
// Boolean    | true, false                | Conditional checks, flags
// Undefined  | undefined                  | Uninitialized variables, missing properties
// Null       | null                       | Resetting/clearing variables, explicit “no value”

// Remember:
// • Booleans drive control flow.
// • Truthy/falsy rules apply implicit Boolean contexts.
// • undefined = never set; null = explicitly “no value”.
// • Always use === when comparing primitives to avoid coercion surprises.
