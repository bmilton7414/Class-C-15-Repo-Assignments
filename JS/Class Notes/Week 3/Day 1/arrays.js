///////////////////////////////////////////////Welcome To Arrays///////////////////////////////
///////////////////////////////////////////Non-primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// An **array** is a specialized object for holding an ordered collection of values.
// Arrays in JavaScript are **non-primitive** and **mutable**, meaning you can change
// their contents after creation. They support mixed data types, dynamic resizing,
// and a rich API of iteration and transformation methods.

///////////////////////////////////////////////////////////////////////////////////////////////
// How to create an empty array. 
// This is the most recommended way to create an empty list. Here is a general syntax
// let arr=[]
let arr = [];  
// Explanation:
// - `[]` is the array literal syntax, equivalent to `new Array()` but simpler.
// - Internally, arrays maintain a length property that updates automatically.
// - Accessing out-of-bounds index returns undefined rather than error.
// - Use `arr.length` to check size; initially 0.

//////////////////////////////////////////////////////////////////////////////////////////////
// How to create an array with values

//.........................................To Do.............................................
// Create an array with values and then console.log the list and its length  

// Array of numbers
let numbers = [10, 20, 30, 40, 50];
// - Elements separated by commas.
// - Stored in contiguous indices: numbers[0] === 10, …, numbers[4] === 50.
// - Mixed types allowed: [1, 'two', true] is valid.
console.log('Numbers:', numbers);
console.log('numbers.length:', numbers.length); // property reflects number of slots

// Array of strings, fruits
let fruits = ['apple', 'banana', 'cherry', 'date'];
// - Useful for lists of homogeneous items.
// - Strings compared by value; array methods like includes rely on strict equality.
console.log('Fruits:', fruits);
console.log('fruits.length:', fruits.length);

// Array of web technologies
let webTech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
// - Can represent course modules, toolkits, or tags.
// - Arrays can nest objects or other arrays for complex data.
console.log('Web Technologies:', webTech);
console.log('webTech.length:', webTech.length);

///////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array using split()

//.........................................To Do.............................................
// For the two strings use a split method to console.log and see the list of arrays

let colors = 'red,green,blue,yellow';
// split() divides a string into an array of substrings at each comma.
// Returns ['red','green','blue','yellow'].
let colorArray = colors.split(',');  
console.log('Color Array:', colorArray);

// split on whitespace or other delimiters for tokenization.
let sentence = 'I love JavaScript';
// Splitting on space yields an array of words.
// Useful for text processing or simple parsers.
let words = sentence.split(' ');
console.log('Words:', words);

///////////////////////////////////////////////////////////////////////////////////////////////
// Accessing array items using index

const fruitsIndexed = ['banana', 'orange', 'mango', 'lemon'];
// Index positions:       0         1        2        3

// Use bracket notation to read or write elements.
console.log('fruitsIndexed[0]:', fruitsIndexed[0]); // 'banana'
console.log('fruitsIndexed[2]:', fruitsIndexed[2]); // 'mango'

// Negative indices not supported before ES2022; use at() for last element:
console.log('Last fruit via at():', fruitsIndexed.at(-1)); // 'lemon'

///////////////////////////////////////////////////////////////////////////////////////////////
//.........................................To Do.............................................
// console how many are in my shopping bag, just access and print Potato, Milk and Sugar.
// Replace Avocado with Onion

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
]; // List of food products

console.log('shoppingCart.length:', shoppingCart.length); // total items
console.log('Potato:', shoppingCart[3]);  // index 3
console.log('Milk:', shoppingCart[0]);    // index 0
console.log('Sugar:', shoppingCart[7]);   // index 7

// Modify element: arrays are mutable, so assignments update in place.
shoppingCart[4] = 'Onion';
console.log('Updated shoppingCart:', shoppingCart);

//////////////////////////////////////////////////////////////////////////////////////////////
// Modifying array element

const nums = [1, 2, 3, 4, 5];
// indices:      0  1  2  3  4

// Direct assignment changes the value at that slot:
nums[2] = 30;  
console.log('Modified nums:', nums);
// → [1,2,30,4,5]

/* Tip:
   - Direct assignment is O(1).
   - Avoid sparse arrays (leaving holes) for performance.
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// Methods to manipulate array

// push(item): append to end in O(1) amortized
nums.push(6);
console.log('After push(6):', nums);

// pop(): remove last element and return it
let popped = nums.pop();
console.log('popped value:', popped, 'After pop():', nums);

// unshift(item): add to beginning (O(n) as elements shift right)
nums.unshift(0);
console.log('After unshift(0):', nums);

// shift(): remove first element (O(n) as remaining shift left)
let shifted = nums.shift();
console.log('shifted value:', shifted, 'After shift():', nums);

// splice(start, deleteCount, ...items): versatile mutator
nums.splice(2, 1, 40, 50); // at index 2, remove 1, insert 40 & 50
console.log('After splice(2,1,40,50):', nums);

// slice(start, end): non-destructive copy (end index not included)
let part = nums.slice(1, 4);
console.log('slice(1,4):', part);

// concat(...arrays): merge into new array; original untouched
let concatExample = nums.concat([7, 8, 9]);
console.log('concat with [7,8,9]:', concatExample);

// join(separator): create string from elements; good for CSV
console.log('fruits.join(" - "):', fruits.join(' - '));

//////////////////////////////////////////////////////////////////////////////////////////////
// Advanced traversal and transformation

// forEach(callback): executes for each element, no return
numbers.forEach((n, i) => console.log(`numbers[${i}] = ${n}`));

// map(callback): returns new array mapping each element
let doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// filter(callback): returns new array of elements passing predicate
let even = numbers.filter(n => n % 2 === 0);
console.log('Evens:', even);

// reduce(callback, initial): accumulate values into single result
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum via reduce:', sum);

// find(callback): first element matching predicate or undefined
let found = numbers.find(n => n > 25);
console.log('First >25:', found);

// findIndex(callback): index of first matching element or -1
let idx = numbers.findIndex(n => n > 25);
console.log('Index of first >25:', idx);

// includes(value): boolean existence check
console.log('Includes 30?', numbers.includes(30));

///////////////////////////////////////////////////////////////////////////////////////////////
// ES6 and beyond array utilities

// Array.from(iterable): create array from any iterable or array-like
let strArr = Array.from('hello');
console.log('Array.from string:', strArr);

// Array.isArray(obj): reliable array check
console.log('Is numbers an array?', Array.isArray(numbers));

// Spread syntax [...]: clone or merge arrays succinctly
let cloneNums = [...numbers];
console.log('cloneNums:', cloneNums);

// Destructuring assignment for arrays
const [firstNum, secondNum, ...restNums] = numbers;
console.log('First:', firstNum, 'Second:', secondNum, 'Rest:', restNums);

// flat(depth): flatten nested arrays up to depth (default 1)
const nested = [1, [2, [3, [4]]]];
console.log('flat depth 2:', nested.flat(2));

// flatMap(callback): map then flatten one level
let wordsLength = sentence.split(' ').flatMap(w => [w, w.length]);
console.log('flatMap words and lengths:', wordsLength);

///////////////////////////////////////////////////////////////////////////////////////////////
// Getting index of an element (search)

console.log('Index of 40:', nums.indexOf(40));
console.log('Has 40?', nums.includes(40));

///////////////////////////////////////////////////////////////////////////////////////////////
// Arrays of arrays (nested arrays)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Access nested entries with two indices:
console.log('matrix[1][2]:', matrix[1][2]); // 6

// Nested loops to traverse 2D structure:
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Additional methods & best practices

// reverse(): in-place reversal
let rev = [...numbers].reverse();
console.log('Reversed copy:', rev);

// sort(): default lex order; provide comparator for numeric
let unsorted = [3, 1, 4, 2];
unsorted.sort();                      
console.log('Lex sort:', unsorted);
unsorted.sort((a,b) => b - a);        
console.log('Numeric desc:', unsorted);

// fill(value, start, end): fill elements in place
let filled = new Array(5).fill(0);
console.log('Filled:', filled);

// copyWithin(target, start, end): copy part of array within itself
let cw = [1,2,3,4,5];
cw.copyWithin(0, 3, 5);
console.log('copyWithin:', cw);

// Performance tips:
// • Mutators (push/pop/unshift/shift/splice) change original—good for stacks/queues.
// • Accessors (map/filter/slice) return new arrays—safe for immutable patterns.
// • Avoid large sparse arrays; use objects or Maps for sparse data.
// • Prefer for-of or functional methods over classic for loops for clarity.

// Arrays are the workhorse of JavaScript data handling: mastering them unlocks powerful,
 // declarative, and efficient code patterns for real-world applications.
