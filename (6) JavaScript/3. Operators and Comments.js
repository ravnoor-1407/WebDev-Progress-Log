// Operators and Comments in JavaScript

// Comments are used to explain code and make it more readable.
// Single-line comments start with two forward slashes (//).
// Multi-line comments are enclosed within /* and */.

// Operators are special symbols that perform operations on operands (values and variables).

// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponentiation:", a ** b); // 100000

// Unary Operators
let c = 5;
console.log("Unary Plus:", +c); // 5
console.log("Unary Minus:", -c); // -5
console.log("Pre-Increment:", ++c); // 6
console.log("Post-Increment:", c++); // 6 (then c becomes 7)
console.log("After Post-Increment:", c); // 7
c = 5; // Reset c to 5
console.log("Pre-Decrement:", --c);
console.log("Post-Decrement:", c--); // 4 (then c becomes 3)

//Assignment Operators
let d = 10;
console.log("d after adding 5: ", d += 5); // 15
console.log("d after subtracting 3: ", d -= 3); // 12
console.log("d after multiplying by 2: ", d *= 2); // 24
console.log("d after dividing by 12: ", d /= 12); // 2

// Comparison Operators (gives boolean results)
let x = 2;
let y = 5;

console.log("x == y", x == y);
console.log("x != y", x != y);
console.log("x > y", x > y);
console.log("x < y", x < y);
console.log("x >= y", x >= y);
console.log("x <= y", x <= y);

// Note: == compares values not types, while === compares both value and type.
// Similarly, != compares values not types, while !== compares both value and type.
//Example:
let num1 = 5;
let num2 = "5";
console.log("num1 == num2", num1 == num2); // true (values are equal)
console.log("num1 === num2", num1 === num2); // false (types are different)
console.log("num1 != num2", num1 != num2); // false (values are equal)
console.log("num1 !== num2", num1 !== num2); // true (types are different)

// Comparison for Non-numbers
console.log("a > A", 'a' > 'A'); // true (ASCII value 61 > 41)
console.log("a > b", 'a' > 'b'); // false (ASCII value 61 < 62)
console.log("@ > $", '@' > '$'); // false (ASCII value 40 < 36)

// Logical Operators
let cond1 = x > y; //false 2 > 5
let cond2 = x < y; //true  2 < 5
console.log("cond1 && cond2 :", cond1 && cond2); //false: Logical AND
console.log("cond1 || cond2 :", cond1 || cond2); //true: Logical OR
console.log("!cond1 :", !cond1); //true: Logical NOT

// Q. A "good string" is a string that starts with letter 'a' and has a length > 3.
// Write a program to find if a string is good or not.

let string = "apple";

if (string[0] == 'a' && string.length > 3) {
    console.log(string, "is a good string.")
} else {
    console.log(string, "is not a good string")
}

// Predict the output:
let num = 12;

if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) { // true && (false || true) -> true && true -> true
    console.log("Safe");
} else {
    console.log("Unsafe");
}