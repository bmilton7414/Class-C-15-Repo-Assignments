// variables.js
// =======================
// In this activity you’ll practice all three variable keywords:
//  • var   → function-scoped, can be redeclared & updated
//  • let   → block-scoped, can be updated but NOT redeclared in the same scope
//  • const → block-scoped, cannot be reassigned (though objects/arrays can be mutated)

/* 1) Using var:
   Declare a function-scoped variable named `myVar` and assign it the string "apple". */
var myVar = "apple";


/* 2) Using let:
   Declare a block-scoped variable named `myNum` and assign it the number 5. */
let myNum = 5;


/* 3) Using const:
   Declare a constant named `myBool` and assign it the boolean true.
   const cannot be reassigned to a new value. */
const myBool = true;


/* 4) Using const for arrays:
   Declare a constant named `myArr` and assign it the array ["apple", 5, true].
   You can still mutate the array (e.g., myArr.push(...)), but you cannot reassign myArr itself. */
const myArr = ["apple", 5, true];


/* 5) Using let for objects:
   Declare a block-scoped variable named `myObj` and assign it the object { name: "Alice", age: 30 }.
   Even if this were const, you could change properties (myObj.age = 31), 
   but let lets you reassign `myObj` entirely if needed. */
let myObj = { name: "Alice", age: 30 };



// =======================
// Do not modify anything below this line.
// The test suite will check these five variables.
