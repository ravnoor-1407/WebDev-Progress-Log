// Random Integers in JavaScript

// Generate a random integer from 1 to 10
// num = Math.floor (Math.random() * 10) + 1;

// Step 1: Generate a random number ranging from 1 to 9
let num = Math.random();
// Step 2: Multiply it with 10
num = num * 10;
// Step 3: Apply floor function
num = Math.floor(num);
// Step 4: Add 1 to the number ( because in step 1 10 is not inclusive)
num = num + 1;
console.log(num);