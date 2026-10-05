// Unary Operators in JavaScript
// Unary operators are operators that operate on a single operand. They can be used to perform various operations such as incrementing, decrementing, negating, and more.
// Unary operators include the increment operator (++), decrement operator (--), unary plus (+), unary negation (-), logical NOT (!), and typeof operator.

let year = 2024;
console.log("Current Year:", year); // Output: 2024

// Increment Operator (++)
year++;
console.log("After Increment:", year); // Output: 2025

// Decrement Operator (--)
year--;
console.log("After Decrement:", year); // Output: 2024

// Unary Plus (+)
let strNum = "42";
let num = +strNum;
console.log("Unary Plus:", num); // Output: 42

let booleanValue = false;
let numericValue = +booleanValue;
console.log("Unary Plus on Boolean:", numericValue); // Output: 0

// Unary Negation (-)
let positiveNum = 10;
let negativeNum = -positiveNum;
console.log("Unary Negation:", negativeNum); // Output: -10

// Logical NOT (!)
let bool = true;
let notBool = !bool;
console.log("Logical NOT:", notBool); // Output: false

// typeof Operator
console.log("Type of year:", typeof year); // Output: number
console.log("Type of strNum:", typeof strNum); // Output: string