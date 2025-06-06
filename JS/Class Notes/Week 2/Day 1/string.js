///////////////////////////////////////////////Welcome To Strings///////////////////////////////
///////////////////////////////////////////Primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// In JavaScript, a **string** is a sequence of characters used to represent text.
// Strings are a **primitive** data type, which means each string value is immutable
// (you cannot change a character within an existing string; any "change" produces a new string).

///////////////////////////////////////////////////////////////////////////////////////////////
// Three ways to declare string literals:

// 1. Single quotes:
let firstName = 'Chris';          
//    ^                ^
//    |                └─ string content
//    └─ start/end delimiter

// 2. Double quotes:
let lastName  = "Williams";      

// 3. Backtick quotes (template literals):
let middleName = `JavaScript`;   
// Backticks allow embedded expressions and multi-line strings.

///////////////////////////////////////////////////////////////////////////////////////////////
// Concatenation (joining strings):

// Using + operator:
let introduction = "My name is" + " " + firstName + " " + lastName + " " + middleName + ".";
// └─ literal              └─ space └─ firstName └─ space └─ lastName └─ space └─ middleName └─ period
console.log(introduction);
// → "My name is Chris Williams JavaScript."

///////////////////////////////////////////////////////////////////////////////////////////////
// Useful String Properties & Methods:

// .length property returns the number of characters:
let faveTeam = "Titans";
console.log("Length of faveTeam:", faveTeam.length);  
// → 6 characters

// .toUpperCase() and .toLowerCase():
console.log("Uppercase:", faveTeam.toUpperCase());   // "TITANS"
console.log("Lowercase:", faveTeam.toLowerCase());   // "titans"

///////////////////////////////////////////////////////////////////////////////////////////////
// Building longer strings:

let teamColor  = "Blue & grey";
let teamSymbol = "star";
// Using concatenation:
let carolsTeam = "My favorite team is " + faveTeam + " and their color is " + teamColor + ".";
console.log(carolsTeam);
// → "My favorite team is Titans and their color is Blue & grey."

// Using template literals (backticks) for readability:
let formatted = `My favorite team is ${faveTeam}, their colors are ${teamColor}, and their symbol is a ${teamSymbol}.`;
console.log(formatted);
// → "My favorite team is Titans, their colors are Blue & grey, and their symbol is a star."

///////////////////////////////////////////////////////////////////////////////////////////////
// Escape sequence characters (allow special characters in strings):
// \n : new line
// \t : tab (inserts a horizontal tab — usually 4 or 8 spaces in consoles)
// \\ : backslash
// \' : single quote (')
// \" : double quote (")

let paragraph = "\tThroughout the course, you will \'embark on a journey to understand core principles and methodologies behind data analytics.\n" +
                "You will learn statistical techniques to analyze and interpret data, enabling you to draw meaningful insights.\n" +
                "You will also explore financial forecasting techniques to predict future trends.";
console.log(paragraph);
/* 
→     Throughout the course, you will 'embark on a journey to understand core principles and methodologies behind data analytics.
    You will learn statistical techniques to analyze and interpret data, enabling you to draw meaningful insights.
    You will also explore financial forecasting techniques to predict future trends.
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// Accessing characters by index (strings are zero-indexed like arrays):
let js = "JavaScript";
// index: 0 1 2 3 4 5 6 7 8 9
//       J a v a S c r i p t
console.log("Character at index 4:", js[4]); // 'S'
console.log("Last character:", js[js.length - 1]); // 't'

///////////////////////////////////////////////////////////////////////////////////////////////
// Extracting substrings:

// .slice(startIndex, endIndex) — endIndex not included:
console.log("slice(4,10):", js.slice(4, 10)); // "Script"

// .substring(start, end) — similar to slice, but negative values treated as 0:
console.log("substring(0,4):", js.substring(0, 4)); // "Java"

// .substr(start, length) — start at index, take length characters:
console.log("substr(4,6):", js.substr(4, 6)); // "Script"

///////////////////////////////////////////////////////////////////////////////////////////////
// Searching within strings:

// .indexOf(substring) returns first index or -1 if not found:
console.log("Index of 'Script':", js.indexOf("Script")); // 4

// .includes(substring) returns true/false:
console.log("Includes 'Java'? ", js.includes("Java"));  // true

// .startsWith / .endsWith:
console.log("Starts with 'Java'? ", js.startsWith("Java")); // true
console.log("Ends with 'Script'? ", js.endsWith("Script")); // true

///////////////////////////////////////////////////////////////////////////////////////////////
// Changing data type (casting between strings and numbers):

// Converting string to integer:
let strNumInt = '10';
let intVal1 = parseInt(strNumInt);     // 10
let intVal2 = Number(strNumInt);       // 10
let intVal3 = +strNumInt;              // 10
console.log(intVal1, intVal2, intVal3);

// Converting string to float:
let strNumFloat = '9.81';
let floatVal1 = parseFloat(strNumFloat); // 9.81
let floatVal2 = Number(strNumFloat);     // 9.81
let floatVal3 = +strNumFloat;            // 9.81
console.log(floatVal1, floatVal2, floatVal3);

// Converting float to integer (drops decimals):
let num = 9.81;
let intFromFloat = parseInt(num);        // 9
console.log(intFromFloat);

///////////////////////////////////////////////////////////////////////////////////////////////
// Summary of string capabilities:
// - Declaration: '', "", ``
// - Concatenation: + or `${}` in template literals
// - Properties: .length
// - Character access: [index]
// - Case conversion: .toUpperCase(), .toLowerCase()
// - Substring extraction: .slice(), .substring(), .substr()
// - Searching: .indexOf(), .includes(), .startsWith(), .endsWith()
// - Splitting: .split()
// - Trimming whitespace: .trim(), .trimStart(), .trimEnd()
// - Casting: parseInt(), parseFloat(), Number(), +

// Practice Exercises:
// 1. Declare a string with your full name; log the first and last character.
// 2. Use a template literal to build a sentence about your favorite movie.
// 3. Given "apple orange banana", split it into an array of fruits.
// 4. Trim whitespace from "   Hello World   ".
// 5. Convert the string "123.45" to a number and add 10 to it.
