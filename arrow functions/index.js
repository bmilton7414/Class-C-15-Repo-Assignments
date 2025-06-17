//say hello function
const sayHello = () => "Hello!";
console.log(sayHello());

// Add two numbers
const add = (a, b) => a + b;
console.log(add(2, 5));


//square a number
const square = (n) => n * n;
console.log(square(4));

//make it uppercase
const shout = (word) => word.toUpperCase();
console.log(shout("hello"));

//check if a number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(7)); // false

//greet someone by name
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Brad"));

//bonus
const getAgeMessage = (age) => {
  if (age >= 18) { 
    return "You're an adult!"; 
  } else { 
    return "You're still a kid!"; 
  } 
}; 
console.log(getAgeMessage(20)); // "You're an adult!"
console.log(getAgeMessage(15)); // "You're still a kid!"