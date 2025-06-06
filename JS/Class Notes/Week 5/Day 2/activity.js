const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Explain the difference between forEach, map, filter, and reduce.
// map- Is mostly used. takes an new array modify it using the callback function and then it gives you a new array. 
//.map is a for loop
// let newArray=[2,4,6,8] //=>[4,8,12,16]
// let countrie = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
 
// let modifiedArray=countrie.map( (intialCountrie)=>intialCountrie.toUpperCase())
// console.log(modifiedArray)
// let modifiedArray=[]
// for(let i=0;i<=newArray.length;i++){
//   modifiedArray.push(newArray[i]*2)
// }

// forEach // '.forEach' it is a great method for looping through or capturing a value for each. to loop through arrays
//  it takes three things to make..callback ,index, an array


let finalCountries=countries.forEach(eachCountry=>console.log(eachCountry.toUpperCase()))
console.log(finalCountries)

// filter
// reduce

// Define a callback function before you use it in forEach, map, filter or reduce.



// Use forEach to console.log each country in the countries array.
let consoleLogCountry = countries.forEach(eachCountry => console.log(eachCountry))
console.log(consoleLogCountry)


// Use forEach to console.log each name in the names array.

let eachName1 = names.forEach(eachName => console.log(eachName))
console.log(eachName1)
// Use forEach to console.log each number in the numbers array.

let eachNumber = numbers.forEach(eachNmuber => console.log(eachNumber))
console.log(eachNumber)
// Use map to create a new array by changing each country to uppercase in the countries array.



// Use map to create an array of countries length from countries array.
//[7,6,7,6,7]

let modified = countries.map((eachCountry) => eachCountry.length)
console.log(modified)
// let modified=[ 7, 6, 7, 6, 7 ]=>[49,36,49,36,49]
// Use map to create a new array by changing each number to square in the numbers array

let modified1 = modified.map((eachCountryLength) => eachCountryLength**2)
console.log(modified1)

// Use map to change to each name to uppercase in the names array

let eachName = names.map((namesUpper) => namesUpper.toUpperCase())
console.log(eachName)
// Use map to map the products array to its corresponding prices.


let productPrice = products.map((eachProduct) =>"The price of "+eachProduct.product+" "+"is "+eachProduct.price)
console.log(productPrice)
//Array the .map is looping through 
// [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// //eachProduct is captuing the objects individualy 
// eachProduct={ product: 'banana', price: 3 }
// eachProduct={ product: 'mango', price: 6 }
// eachProduct={ product: 'potato', price: ' ' }
// eachProduct={ product: 'avocado', price: 8 }
// eachProduct={ product: 'coffee', price: 10 }
// eachProduct={ product: 'tea', price: '' }
// //eachProduct.price gives you only the price
// eachProduct.price=3
// eachProduct.price=6
// eachProduct.price=' '


// [ 3, 6, ' ', 8, 10, '' ]

// Use filter to filter out countries containing land.




// Use filter to filter out countries having six character.




// Use filter to filter out countries containing six letters and more in the country array.



// Use filter to filter out country start with 'E';




// Use filter to filter out only prices with values.





// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.




// Use reduce to sum all the numbers in the numbers array.




// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries




// Explain the difference between some and every




// Use some to check if some names' length greater than seven in names array




// Use every to check if all the countries contain the word land




// Explain the difference between find and findIndex.




// Use find to find the first country containing only six letters in the countries array




// Use findIndex to find the position of the first country containing only six letters in the countries array




// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.




// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.



