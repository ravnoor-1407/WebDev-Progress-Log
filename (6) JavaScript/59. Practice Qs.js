// Practice Questions on Arrow Functions

// Q1. Write an arrow function that returns the square of a number 'n'.
const calcSq = (n) => {
    return n * n;
};
console.log(calcSq(2));

// Q2. Write a function that prints "Hello World" 5 times at interval of 2s each.
let id = setInterval( () => {
    console.log("Hello World!");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clearInterval ran!")
}, 12000);