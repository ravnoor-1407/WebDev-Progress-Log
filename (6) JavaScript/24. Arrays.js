// Arrays in JavaScript

let students = ["Ravnoor", "Krishant", "Niharika", "Mohabbat", "Simran", "Raman"];
console.log(students);

// Accessing elements
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);

// Accessing character in a string
console.log(students[0][0]);

// Mixed data type array
let info = ["Ravnoor", 19, 89.9];
console.log(info);

// Empty array
let emptyarr = [];
console.log(emptyarr);

// Array length
console.log(students.length);
console.log(info.length);

// Arrays are mutable we can change the elements of an array.
let fruits = ["apple", "banana", "mango"];
console.log("Before changing elements: ", fruits);
fruits[0] = "guava";
console.log("After changing elements: ", fruits);
// Here, we will notice that the length of array is 3 but we added an element at index 8
// This will give us array with first three elements, 5 empty ones and then 'pinepple' element making array of length 9 
fruits[8] = "pineapple";
console.log(fruits);