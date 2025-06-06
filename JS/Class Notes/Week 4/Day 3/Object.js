//////////////////////////////////////Object/////////////////////////////////

// In JavaScript, an **object** is a collection of key–value pairs (called properties) 
// plus an internal link to a prototype object. Objects are mutable and can contain 
// data (properties) and behavior (methods).

////////////////////////////////////////////////////////////////////////////////
// Creating an empty object
// ------------------------
// Use the literal {} or the Object constructor. An empty object has no own properties 
// and inherits methods like toString() from Object.prototype.

let emptyObject = {};                // literal syntax
let anotherEmpty = new Object();     // constructor syntax
console.log("Empty objects:", emptyObject, anotherEmpty);
// → Empty objects: {} {}

////////////////////////////////////////////////////////////////////////////////
// Creating an object with values
// -------------------------------
// List properties as key: value pairs. Keys that are valid identifiers can omit quotes.
// Values may be any type, including nested objects or arrays.

let person = {
  firstName: "Alice",                // string property
  lastName:  "Smith",                // string property
  age:       30,                     // number property
  isStudent: true,                   // boolean property
  address: {                         // nested object for grouping related data
    street: "123 Maple St",
    city:   "Springfield"
  },
  interests: ["reading", "hiking"],  // array property
  fullName() {                        // ES6 method shorthand
    // `this` refers to the object on which the method is called
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log("Person:", person);
// → Person: {firstName:"Alice", lastName:"Smith", age:30, isStudent:true, address:{…}, interests:[…], fullName:ƒ}

////////////////////////////////////////////////////////////////////////////////
// Getting values from an object
// ------------------------------
// 1) Dot notation: simple and concise, but key must be a valid identifier.
console.log("Dot notation:", person.firstName, person.age);  // "Alice" 30

// 2) Bracket notation: allows dynamic keys and keys with spaces or symbols.
console.log("Bracket notation:", person["lastName"]);
let prop = "isStudent";
console.log("Dynamic key:", person[prop]);                   // true

////////////////////////////////////////////////////////////////////////////////
// Creating object methods
// -----------------------
// Methods are functions stored as properties. They can read or modify object state via `this`.

let counter = {
  count: 0,
  increment() {           // shorthand method definition
    this.count += 1;      // mutate the count property
    console.log("Count after increment:", this.count);
    return this.count;
  },
  decrement: function() { // traditional function expression
    this.count -= 1;
    console.log("Count after decrement:", this.count);
    return this.count;
  },
  reset() {               // reset method
    this.count = 0;
    console.log("Count reset to:", this.count);
    return this.count;
  }
};
counter.increment();      // Count after increment: 1
counter.increment();      // Count after increment: 2
counter.decrement();      // Count after decrement: 1
counter.reset();          // Count reset to: 0

////////////////////////////////////////////////////////////////////////////////
// Setting new key for an object
// ------------------------------
// You can add properties at runtime with dot or bracket notation. If the key exists, its value is overwritten.

person.country = "USA";                     // add via dot
person["favorite color"] = "blue";          // add via bracket
console.log("After additions:", person);
// → includes country:"USA" and "favorite color":"blue"

////////////////////////////////////////////////////////////////////////////////
// Dynamic / Computed Property Names
// ---------------------------------
// Use square brackets in object literals to compute property names from expressions.

let keyName = "score";
let player = {
  name: "Bob",
  [keyName]: 100       // property name is the value of keyName
};
console.log("Player score:", player.score); // 100

////////////////////////////////////////////////////////////////////////////////
// Object Methods (Introspection)
// --------------------------------

// Object.keys(obj): returns array of own enumerable property names.
console.log("Keys:", Object.keys(person));

// Object.values(obj): returns array of own enumerable property values.
console.log("Values:", Object.values(person));

// Object.entries(obj): returns array of [key, value] pairs.
console.log("Entries:", Object.entries(person));

// obj.hasOwnProperty(prop): checks if prop exists directly on obj (not in prototype).
console.log("Has 'age'?", person.hasOwnProperty("age"));           // true
console.log("Has 'toString'?", person.hasOwnProperty("toString")); // false

////////////////////////////////////////////////////////////////////////////////
// Deleting properties
// -------------------
// Use the `delete` operator to remove properties. It returns true if successful.

delete person.age;
console.log("After delete 'age':", person.hasOwnProperty("age")); // false

////////////////////////////////////////////////////////////////////////////////
// Cloning and Merging: Object.assign & spread
// -------------------------------------------

// Shallow clone or merge sources into target:
let defaults = { a: 1, b: 2 };
let overrides = { b: 99, c: 3 };
let merged = Object.assign({}, defaults, overrides);
console.log("Merged:", merged);  // {a:1, b:99, c:3}

// Spread syntax (ES2018) for shallow cloning:
let clone = { ...person };
console.log("Clone:", clone);

////////////////////////////////////////////////////////////////////////////////
// Destructuring Assignment
// ------------------------
// Extract properties into variables.
let { firstName, age: years } = person;
console.log("Destructured:", firstName, years);        // "Alice", 30

////////////////////////////////////////////////////////////////////////////////
// Prototype Chain: Object.create & __proto__
// -------------------------------------------

// Create an object with a specific prototype:
let proto = { greet() { return "Hi!"; } };
let objWithProto = Object.create(proto);
console.log("Prototype call:", objWithProto.greet());   // "Hi!"
console.log("Is proto:", Object.getPrototypeOf(objWithProto) === proto); // true

////////////////////////////////////////////////////////////////////////////////
// Constructor Functions & ES6 Classes
// ------------------------------------

// Traditional constructor function pattern:
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName  = lname;
}
Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
let p1 = new Person("Charlie", "Brown");
console.log("Constructor fullName:", p1.fullName());      // "Charlie Brown"

// ES6 class syntax (syntactic sugar over prototype):
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}
let dog = new Animal("Rex");
console.log(dog.speak());                                // "Rex makes a noise."

////////////////////////////////////////////////////////////////////////////////
// Getters and Setters
// --------------------
// Define computed or virtual properties with getter and setter functions.

let rectangle = {
  width:  10,
  height: 5,
  get area() {                                     // getter for computed property
    return this.width * this.height;
  },
  set area(value) {                                // setter updates dependent property
    this.height = value / this.width;
  }
};
console.log("Rectangle area:", rectangle.area);     // 50
rectangle.area = 100;
console.log("New height after setting area:", rectangle.height); // 10

////////////////////////////////////////////////////////////////////////////////
// JSON Serialization
// ------------------
// Convert objects to/from JSON strings for storage or network transfer.

let json = JSON.stringify(person);
console.log("JSON string:", json);
let parsed = JSON.parse(json);
console.log("Parsed object:", parsed);

////////////////////////////////////////////////////////////////////////////////
// Immutability & Property Control
// --------------------------------

// Prevent modifications to object structure or values:
Object.freeze(person);                             // no adds, deletes, or changes
person.firstName = "Eve";                          // ignored
console.log("After freeze:", person.firstName);    // "Alice"

// Seal: prevent adding/removing props, but allow updates:
let sealed = { x: 1 };
Object.seal(sealed);
sealed.x = 2;                                      // works
sealed.y = 3;                                      // ignored
console.log("Sealed object:", sealed);

////////////////////////////////////////////////////////////////////////////////
// Property Descriptors & Object.defineProperty
// -------------------------------------------
// Fine-grained control: writable, enumerable, configurable.

let book = {};
Object.defineProperty(book, "title", {
  value: "1984",
  writable: false,      // cannot be reassigned
  enumerable: true,     // shows up in keys/entries
  configurable: false   // cannot be deleted or reconfigured
});
console.log("Book title:", book.title);
book.title = "Animal Farm";                        // ignored
console.log("After attempt to change title:", book.title);

////////////////////////////////////////////////////////////////////////////////
// Iterating over Objects
// ----------------------

// for...in loops over enumerable keys (including inherited):
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`for...in: ${key}: ${person[key]}`);
  }
}

// for...of with Object.entries for only own properties:
for (let [k, v] of Object.entries(person)) {
  console.log(`for...of entries: ${k}: ${v}`);
}

////////////////////////////////////////////////////////////////////////////////
// Deep Cloning
// ------------
// Clone nested objects safely. structuredClone is modern and preserves types.

let deepClone = structuredClone(person);
console.log("Deep clone:", deepClone);

////////////////////////////////////////////////////////////////////////////////
// Summary
// -------
// • Objects bundle data (properties) and behavior (methods).  
// • Access/set via dot/bracket notation.  
// • Introspect with Object.keys/values/entries and hasOwnProperty.  
// • Clone/merge with Object.assign or spread syntax.  
// • Control mutability with freeze/seal/defineProperty.  
// • Prototype-based inheritance underpins objects and classes.  
// • Mastery of objects is essential for real-world JavaScript applications.
