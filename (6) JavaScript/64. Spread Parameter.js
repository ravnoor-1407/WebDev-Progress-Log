// Spread Operator in JavaScript
// It expands an iterable to multiple values.

// 1. Basic Examples

// Print each element of an array using spread operator
let arr = [1, 2, 3, 5, 6];
console.log(...arr);

// Print each character of a string using spread operator
let str = "ApnaCollege";
console.log(...str);

// 2. Array Literals

// Copy an Array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

// Merge Two Arrays
let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];
let food = [...fruits, ...vegetables];
console.log(food); // ["Apple", "Banana", "Carrot", "Potato"]

// Add Elements While Copying
let numbers = [2, 3, 4];
let newNumbers = [1, ...numbers, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

// Create a New Array Without Affecting the Original
let original = [10, 20, 30];
let copy = [...original];
copy.push(40);
console.log(original); // [10, 20, 30]
console.log(copy);     // [10, 20, 30, 40]

// Print characters of a string using array literals
let string = ["Hello"];
let chars = [...string];
console.log(chars); // ["H", "e", "l", "l", "o"]

// 3. Object Literals

// Adding new data to object while copying
const data = {
    email: "shineravnoor@gmail.com",
    password: "noo****07"
};
const dataInfo = {...data, id: 101};
console.log(dataInfo);

// Storing an array to an object
let arr = [1, 2, 3, 4, 5];
let obj = {...arr}; // Objects exist in key-value pair, hence, index of elements(key) and elements(value) 
console.log(obj);