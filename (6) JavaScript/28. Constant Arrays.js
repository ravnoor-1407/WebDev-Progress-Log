// Constant Arrays in JavaScript

// Constant variables
const g = 10;
console.log(g);
// g = 9.8;  This gives TypeError: Assignment to constant variable.

// Constant arrays
const arr = [1, 2, 3];
console.log(arr);
console.log(arr.push(4));
console.log(arr); // We can change the values using the array methods

// arr = [4, 5, 6];  We can't reassign the values to array as it gives TypeError: Assignment to constant variable.
// This is because the memory address has been made constant and reassigning deals with the address