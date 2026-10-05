// Practice Questions on Random Integers

// Q1. Generate a random integer from 1 to 100

// num = Math.floor (Math.random() * 100) + 1;
let num1 = Math.random();
num1 = num1 * 100;
num1 = Math.floor(num1);
num1 = num1 + 1;
console.log(`num1 = ${num1}`);

// Q2. Generate a random integer from 1 to 5

// num = Math.floor (Math.random() * 5) + 1;
let num2 = Math.random();
num2 = num2 * 5;
num2 = Math.floor(num2);
num2 = num2 + 1;
console.log(`num2 = ${num2}`);

// Q3. Generate a random integer from 21 to 25

// num = Math.floor (Math.random() * 5) + 20;
let num3 = Math.random();
num3 = num3 * 5;
num3 = Math.floor(num3);
num3 = num3 + 20;
console.log(`num3 = ${num3}`);