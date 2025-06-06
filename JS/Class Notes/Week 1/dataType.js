////////////////////////Data Types//////////////////////////


///// Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. In JavaScript, any text line starting with // in JavaScript is a comment, and anything enclosed like this /**/ is also a comment

///// We can write any JavaScript code on the Google console or any browser console

// Method//	               //Description//	                       //BestFor//
// console.log()           DeveloperConsoleonly                     Debugging
// document.write()	       Directly writes to page	                Quick tests (old way)
// innerHTML	           Target element and change content	    Modern + Recommended
// document.body.innerHTML +=	Append directly to page	            Simple page output

////// a built-in function ***console.log()***. We can pass an argument as input data, and the function displays the output

////// We passed 'Hello, World' as input data or argument in the console.log() function 
// If we are printing text or string using console.log(), the text has to be inside the single quotes, double quotes, or a backticks


////// The console.log() function can take multiple parameters separated by commas. The syntax looks like as follows:console.log(param1, param2, param3)


///// For number data types, in addition to the text, we can also do mathematical calculations using JavaScript
console.log() // Addition
console.log() // Subtraction
console.log() // Multiplication
console.log() // Division
console.log() // Modulus - finding remainder
console.log() // Exponentiation 3 ** 2 == 3 * 3




////** Syntax*////
 
// Programming languages are similar to human languages. English or many other language uses words, phrases, sentences, compound sentences and other more to convey a meaningful message. 

// The English meaning of syntax is the arrangement of words and phrases to create well-formed sentences in a language. 

// The technical definition of syntax is the structure of statements in a computer language.

// Programming languages have syntax.

// JavaScript is a programming language and like other programming languages it has its own syntax. If we do not write a syntax that JavaScript understands, it will raise different types of errors. 



///// Adding JavaScript to a Web Page//////
// JavaScript can be added to a web page in three different ways:
   // Inline script
   // Internal script
   // External script
   // Multiple External scripts


// In JavaScript and also other programming languages, there are different types of data types. The following are JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol.

// /// Numbers ///
// Integers: 
// Integer (negative, zero and positive) numbers Example:
//  ... -3, -2, -1, 0, 1, 2, 3 ...

// Float-point numbers: 
// Decimal number Example:
//  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

// /// Strings ///
// A collection of one or more characters between two single quotes, double quotes, or backticks. 

// /// Booleans ///
// A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

// A boolean data type is either a true or false value.

// /// Undefined ///
// In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

// /// Null /////
// Null in JavaScript means an empty value.





// string:   text or words  "Hello World"
// number: A Nuumeric value(integer or decimal) 20 05 3.14
// boolean: logical true or false  true, false
// Undefined: no value assigned yet      var myName;
// Null: empty value var car = null;

///// Checking Data Types /////
    // To check the data type of a certain variable, we use the typeof operator.



// non-primative data types
// Non-Primitive Data Types (also called reference types) are types of data that can store collections of values or more complex data.

// Unlike primitive types (like number, string, boolean, which hold single values), non-primitive types hold multiple values and are more flexible.

// Also important:
// Non-primitive data types are always mutable and stored by reference (not by value).
// Type //	     /// Description ///
// Object	        Collection of key-value pairs
// Array	        Ordered list of values (technically an object)
// Function	        Reusable block of code (also technically an object)
// Date	            Stores date and time (special object)
// RegExp	        Regular expressions (special object)

// Primitive vs Non-Primitive (quick comparison) ///
  // Primitive ///	                   // Non-Primitive ///
// Stored by Value	                  Stored by Reference
// Immutable	                      Mutable
// Simple(single values)	          Complex (collections, methods, etc.)
// Example: Number, String, Boolean	  Example: Object, Array, Function

// Primitive → Single simple data
// Non-Primitive → Complex and can hold multiple data

// You use Non-Primitive when you want to:

// ✔️ Group things together
// ✔️ Store related data
// ✔️ Reuse code (functions)
// ✔️ Handle time/dates
// ✔️ Use patterns (RegExp)



///// Variables //////
// Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

// For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope).

// A valid JavaScript variable name must follow the following rules:
   // A JavaScript variable name should not begin with a number.
   // A JavaScript variable name does not allow special characters except dollar sign and underscore.
   // A JavaScript variable name follows a camelCase convention.
   // The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In our material, we will use camelCase variables(camelWithOneHump).
   // A JavaScript variable name should not have space between words.

   ///// valid JavaScript variables: ////// 


  //// invalid variables: /////

  

   // Variables are a way to store data types in a memory space. Declared with the key word var.
   // To declare a variable, we need to use let or const keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value(assigned data).


   // declaring a variable with var keyword


  // declaring using let keyword



// declaring using const(constant)








