///////////////////////////// Functional Programming//////////////////////////

// forEach//
// Definition: The forEach method executes a provided function once for each array element. It’s primarily used for running a function on each element of the array but does not return a new array, and it cannot be chained (unlike some other array methods).

// Usage: Often used for iterating through elements to perform side effects (e.g., logging, modifying external data).
const arr = [1, 2, 3];
arr.forEach((element) => {
  console.log(element); // 1, 2, 3
});

// map //
// definition: The map method creates a new array populated with the results of calling a provided function on every element in the calling array. Unlike forEach, it returns a new array.

// Usage: Used when you need to transform elements and return a new array.
const numbers1 = [1, 2, 3];
const doubled = numbers1.map((num) => num * 2); // [2, 4, 6]

// filter //
// Definition: The filter method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

// Usage: Used to select certain elements from an array based on a condition.
const numbers2 = [1, 2, 3, 4];
const evenNumbers = numbers2.filter((num) => num % 2 === 0); // [2, 4]

// reduce //
// Definition: The reduce method executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes an accumulator (the accumulated value from previous iterations) and the current element.

// Usage: Used when you need to compute a single value from an array (e.g., sum, product, etc.).
const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, curr) => acc + curr, 0); // 10

// every //
// Definition: The every method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements satisfy the condition; otherwise, it returns false.

// Usage: Used to check if all elements in an array meet a certain condition.
const numbers4 = [2, 4, 6];
const allEven = numbers4.every((num) => num % 2 === 0); // true

// find //
// Definition: The find method returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the condition, it returns undefined.

// Usage: Used when you need to retrieve the first element that matches a condition.
const numbers5 = [1, 2, 3, 4];
const firstEven = numbers5.find((num) => num % 2 === 0); // 2

// findIndex //
// Definition: The findIndex method returns the index of the first element in the array that satisfies the provided testing function. If no element matches the condition, it returns -1.

// Usage: Similar to find, but returns the index of the found element instead of the element itself.
const numbers6 = [1, 2, 3, 4];
const firstEvenIndex = numbers6.findIndex((num) => num % 2 === 0); // 1

// some //
// Definition: The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if any element passes the test; otherwise, it returns false.

// Usage: Used to check if at least one element in an array meets a condition.
const numbers7 = [1, 2, 3];
const hasEven = numbers7.some((num) => num % 2 === 0); // true

// sort //
// Definition: The sort method sorts the elements of an array in place and returns the sorted array. The default sort order is based on converting elements to strings and comparing their sequences of UTF-16 code unit values.

// Usage: Used to sort arrays alphabetically, numerically, or based on custom criteria. Sorting can be unstable for large arrays.
const fruits = ["banana", "apple", "orange"];
fruits.sort(); // ['apple', 'banana', 'orange']

// Sorting string values //
// Definition: When sorting strings, the sort method compares the UTF-16 code unit values of the characters. For more complex sorting, such as case-insensitive sorting, a custom comparison function can be provided.
const words = ["Banana", "apple", "Orange"];
words.sort((a, b) => a.localeCompare(b)); // ['apple', 'Banana', 'Orange']

// Sorting Numeric values //
// Definition: When sorting numbers, you must pass a comparison function because the default sort method converts numbers to strings, which can lead to incorrect sorting.

// Usage: You provide a custom comparison function to ensure proper numerical sorting.
const numbers = [10, 5, 20, 3];
numbers.sort((a, b) => a - b); // [3, 5, 10, 20]

// Sorting Object Arrays //
// Definition: Sorting an array of objects requires a comparison function that determines how two objects should be compared, typically by comparing specific properties of the objects.

// Usage: Commonly used when working with arrays of complex objects and sorting by specific fields.
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
people.sort((a, b) => a.age - b.age);
// [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
