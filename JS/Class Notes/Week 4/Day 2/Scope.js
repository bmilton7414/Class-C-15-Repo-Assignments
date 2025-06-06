/////////////////////////////////////Scope in JavaScript///////////////////////////////

// Scope determines the visibility (where you can access) and lifetime (how long it exists) 
// of variables and functions in your code. JavaScript uses **lexical (static) scoping**, 
// meaning a variable’s scope is determined by its location in the source code.

///////////////////////////////////////////////////////////////////////////////////////////////
// Window Global Object
// • In browsers, the global execution context is represented by the `window` object.
// • Any variable declared with `var` in the global scope becomes a property of `window`.
// • Variables declared with `let` or `const` do NOT become properties of `window`.
// • Attaching too many globals pollutes the namespace and risks name collisions.

var globalVar = "I am var";       // window.globalVar === "I am var"
let globalLet = "I am let";       // window.globalLet === undefined
const globalConst = "I am const"; // window.globalConst === undefined

console.log(window.globalVar);    // "I am var"
console.log(window.globalLet);    // undefined
console.log(window.globalConst);  // undefined

///////////////////////////////////////////////////////////////////////////////////////////////
// Global Scope
// • Variables and functions declared outside any function or block are in the global scope.
// • Globally scoped identifiers are accessible anywhere in your code, unless shadowed 
//   by a local declaration with the same name.
// • Best practice: minimize global usage by encapsulating code in modules or IIFEs.

let globalName = "Earth";
function showGlobal() {
  // This function can read and modify globalName because it's in global scope.
  console.log("Global Name is:", globalName);
}
showGlobal();
console.log("Also accessible here:", globalName);

///////////////////////////////////////////////////////////////////////////////////////////////
// Local Scope (Function Scope)
// • Variables declared inside a function (using var, let, or const) are local to that function.
// • Function-scoped variables cannot be referenced outside their defining function.
// • Each function invocation creates a new local scope with its own variables.

function localScopeExample() {
  var localVar = "I am local (var)";
  let localLet = "I am local (let)";
  const localConst = "I am local (const)";
  console.log(localVar, localLet, localConst);
}
localScopeExample();
// console.log(localVar); // ReferenceError: localVar is not defined

///////////////////////////////////////////////////////////////////////////////////////////////
// Block Scope (ES6 let/const)
// • let and const are block-scoped: they exist only inside the nearest enclosing `{}`.
// • var is not block-scoped; it’s hoisted to function or global scope instead.
// • Use block scope to limit variable visibility and reduce accidental reuse.

if (true) {
  let blockLet = "block scoped";
  const blockConst = "also block scoped";
  var blockVar = "function/global scoped"; // var ignores block
  console.log(blockLet, blockConst, blockVar);
}
// console.log(blockLet);   // ReferenceError: blockLet is not defined
// console.log(blockConst); // ReferenceError: blockConst is not defined
console.log(blockVar);     // "function/global scoped"

///////////////////////////////////////////////////////////////////////////////////////////////
// Scope Chain & Lexical Scope
// • Inner (nested) functions retain access to variables declared in outer scopes,
//   forming a scope chain that is resolved at definition time (lexically).
// • This enables closures, whereby functions “remember” the environment in which
//   they were created, even after the outer function finishes execution.

let outer = "outside";
function outerFunc() {
  let inner = "inside";
  function innerFunc() {
    // innerFunc can access both `outer` and `inner` variables
    console.log(outer); // "outside"
    console.log(inner); // "inside"
  }
  innerFunc();
}
outerFunc();

///////////////////////////////////////////////////////////////////////////////////////////////
// .....................................To Do.................................................
// ES6 in FCC: Compare Scopes of the var and let Keywords
// • var: function-scoped or global-scoped; hoisted and initialized to `undefined` at top of scope.
// • let: block-scoped; hoisted but uninitialized (in the “Temporal Dead Zone”) until its declaration.
// • Redeclaring `var` in the same scope is allowed; redeclaring `let` in the same block throws an error.

function compareVarLet() {
  console.log(aVar); // undefined (hoisted)
  // console.log(aLet); // ReferenceError: cannot access 'aLet' before initialization
  var aVar = 1;
  let aLet = 2;
}
compareVarLet();

///////////////////////////////////////////////////////////////////////////////////////////////
// Basic JS FCC
// Global Scope and Functions
// • Global variables are accessible from within any function unless a local variable
//   of the same name shadows them.

let globalCount = 0;
function incrementGlobal() {
  globalCount++;       // modifies the global variable
}
incrementGlobal();
console.log(globalCount); // 1

// Local Scope and Functions
// • Variables declared inside a function are local and cannot be accessed outside.

function localCountExample() {
  let localCount = 0;
  localCount++;
  console.log(localCount); // 1
}
localCountExample();
// console.log(localCount); // ReferenceError

// Global vs. Local Scope in Functions
// • A local variable with the same name as a global one “shadows” the global inside the function.

let shadow = "global";
function shadowExample() {
  let shadow = "local";  // shadows the global `shadow`
  console.log(shadow);   // "local"
}
shadowExample();
console.log(shadow);     // "global"
