// 'let', 'const' and 'var' Keywords in JavaScript

// 1. let Keyword: Syntax of declaring variables. It is block scoped and can be updated but not redeclared.

let age = 23;
age = age + 1;
console.log("Age: ", age);

let cgpa;
cgpa = 8.58;
console.log("CGPA: ", cgpa);

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log(sum);

// 2. const Keyword: Values of constants can't be changed with reassignment and they can’t be redeclared. They are block scoped.
const year = 2024;
year = 2025; // This will throw an error
year = year + 1; // This will also throw an error

const pi = 3.14;
console.log("Value of pi: ", pi);

const g = 9.8;
console.log("Value of acceleration due to gravity: ", g);

// 3. var Keyword: Old syntax of declaring variables. It is function scoped and can be redeclared and updated.
var num3 = 3;
var num4 = 4;
var sum2 = num3 + num4;
console.log(sum2);  