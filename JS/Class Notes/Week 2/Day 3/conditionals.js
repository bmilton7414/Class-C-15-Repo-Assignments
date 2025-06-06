/////////////////////////////////////Conditional statements///////////////

// Conditional statements let your code make decisions based on different conditions.
// By default, JavaScript executes statements in sequence; conditionals introduce branching so you can control flow dynamically.

/////if/////////////////////////////////////////////////////////////

// syntax
// if (condition) {
//     // this block runs only when condition evaluates to truthy
// }

let temperature = 75;                     // example variable representing degrees
if (temperature > 70) {                   // condition uses a comparison operator (>)
    console.log("It's warm outside!");    // runs because 75 > 70 is true
}
// Explanation:
//  • `if` checks the expression in parentheses.
//  • If that expression yields true (truthy), the code inside `{}` executes.
//  • Otherwise, it’s skipped.
//  • Common comparison operators: >, <, >=, <=, ===, !==.

/////////////////if else ////////////////////////////////////////

// syntax
// if (condition) {
//     // code when condition is truthy
// } else { 
//     // code when condition is falsy
// }

let isLoggedIn = false;                  
if (isLoggedIn) {                         // condition is a Boolean variable
    console.log("Welcome back!");         // runs if isLoggedIn === true
} else {
    console.log("Please log in.");        // runs if isLoggedIn is false (or any falsy value)
}
// Explanation:
//  • `else` provides an alternate path when the `if` condition is false.
//  • Only one of the two blocks will ever execute.
//  • Useful for binary decisions (yes/no, on/off).

////////if else if else /////////////////////////////////////////

// syntax
// if (condition) {
//     // code when first condition is truthy
// } else if (condition) {
//     // code when second condition is truthy
// } else {
//     // code if all above conditions are falsy
// }

let score = 82;
if (score >= 90) {                        // first branch
    console.log("Grade: A");              // runs if score ≥ 90
} else if (score >= 80) {                 // second branch
    console.log("Grade: B");              // runs if 80 ≤ score < 90
} else if (score >= 70) {                 // third branch
    console.log("Grade: C");              // runs if 70 ≤ score < 80
} else {
    console.log("Grade: F");              // runs if score < 70
}
// Explanation:
//  • JavaScript evaluates each `if`/`else if` in order.
//  • Executes the block for the first truthy condition, then skips the rest.
//  • The final `else` captures all remaining cases.
//  • Handy for multi-level decision trees (grading, UI states, etc.).

/////////////////////////////////////////////////////Switch////////////////////////////////////////////////////////////

// syntax
// switch (caseValue) {
//     case 1:
//         // code when caseValue === 1
//         break
//     case 2:
//         // code when caseValue === 2
//         break
//     case 3:
//         // code when caseValue === 3
//         break
//     case 4:
//         // code when caseValue === 4
//         break
//     default:
//         // code if none of the cases match
//         break
// }

let dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
        console.log("Monday");           // runs if dayOfWeek === 1
        break;
    case 2:
        console.log("Tuesday");          // runs if dayOfWeek === 2
        break;
    case 3:
        console.log("Wednesday");        // runs if dayOfWeek === 3
        break;
    case 4:
        console.log("Thursday");         // runs if dayOfWeek === 4
        break;
    default:
        console.log("Friday or Weekend");// runs if no case above matched
        break;
}
// Explanation:
//  • `switch` compares the `caseValue` strictly (===) against each `case` label.
//  • When a match is found, execution enters there and continues until a `break` or end of switch.
//  • `break` prevents "fall-through" into subsequent cases.
//  • `default` acts like the final `else`, catching unmatched values.
//  • Best for many discrete exact-value checks (menus, enum-like logic).

////////////////////////////////////////////////////////////////////////////////
// Notes on truthy/falsy values and best practices:
//  • JavaScript treats the following as falsy: false, 0, "", null, undefined, NaN.
//  • Everything else (non-zero numbers, non-empty strings, objects, arrays, functions) is truthy.
//  • Always use strict comparison (`===` / `!==`) unless you have a specific need for type coercion.
//  • Keep conditions simple; extract complex logic into named functions for readability.
//  • Use `switch` for clarity when matching one variable against many constant values.

// }

