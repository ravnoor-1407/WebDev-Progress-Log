// Arrow Functions in JavaScript
// An arrow function is a compact alternative to a traditional function expression.
// It uses the fat arrow syntax (=>) and are different from functions in terms of syntax but not execution.

// const func = (arg1, arg2,...) => {
//     do or return something
// }

const calcSum = (a, b) => {
    return a + b;
};
console.log(calcSum(2, 3));

const power = (a, b) => {
    return a * b;
};
console.log(power(2, 4));

// We can avoid paranthesis for single argument functions
const calcCube = n => {
    return n * n * n;
};
console.log(calcCube(3));

// We have to add empty paranthesis even if we have a function with no arguments
const hello = () => {
   return "Hello World!";
};
console.log(hello);

// Implicit return
// An implicit return in a JavaScript arrow function allows you to automatically return a value without using the return keyword or curly braces ({}). 
// It only works when the function body consists of a single expression.

// const func = (arg1, arg2,...) => (
//     value
// )

const calcMul = (a, b) => (
    a * b
);
console.log(calcMul(2, 3));

const calcSub = (a, b) => (
    a - b
);
console.log(calcSub(7, 3));