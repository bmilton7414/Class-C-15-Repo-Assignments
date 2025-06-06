// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName);  // string
console.log(typeof city);      // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof year);      // number
console.log(typeof country);   // string

// Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10); // false

// Boolean value is either true or false.
let isJavaScriptFun = true;
let isSkyGreen = false;
console.log(!true);  // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(4 > 2); // true
console.log(4 < 2); // false


// Write three JavaScript statement which provide truthy value.
console.log(Boolean(1));          // true
console.log(Boolean("Hello"));   // true
console.log(Boolean([]));        // true

// Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false

// Figure out the result of the following comparison expression first without using console.log(). Then confirm it:
console.log(4 > 3);              // true
console.log(4 >= 3);             // true
console.log(4 < 3);              // false
console.log(4 <= 3);             // false
console.log(4 == 4);             // true
console.log(4 === 4);            // true
console.log(4 != 4);             // false
console.log(4 !== 4);            // false
console.log(4 != '4');           // false (== does type coercion)
console.log(4 == '4');           // true
console.log(4 === '4');          // false (strict type check)

// Find the length of python and jargon and make a falsy comparison statement.
let word1 = "python";
let word2 = "jargon";
console.log(word1.length == word2.length); // true
console.log(word1.length !== word2.length); // false (falsy comparison)

// Figure out the result of the following expressions:
console.log(4 > 3 && 10 < 12);       // true
console.log(4 > 3 && 10 > 12);       // false
console.log(4 > 3 || 10 < 12);       // true
console.log(4 > 3 || 10 > 12);       // true
console.log(!(4 > 3));               // false
console.log(!(4 < 3));               // true
console.log(!false);                 // true
console.log(!(4 > 3 && 10 < 12));    // false
console.log(!(4 > 3 && 10 > 12));    // true
console.log(!(4 === '4'));           // true

// There is no 'on' in both dragon and python
let word3 = "dragon";
let word4 = "python";
console.log(word3.includes('on') && word4.includes('on')); // true
console.log(!word3.includes('on') && !word4.includes('on')); // false

// Use the Date object to do the following activities
let now = new Date();

console.log("Year:", now.getFullYear());             // Year today
console.log("Month:", now.getMonth() + 1);           // Month today as a number (0-based)
console.log("Date:", now.getDate());                 // Date today
console.log("Day:", now.getDay());                   // Day today as a number
console.log("Hours:", now.getHours());               // Hours now
console.log("Minutes:", now.getMinutes());           // Minutes now
console.log("Seconds since 1970:", Math.floor(Date.now() / 1000)); // Seconds since epoch
