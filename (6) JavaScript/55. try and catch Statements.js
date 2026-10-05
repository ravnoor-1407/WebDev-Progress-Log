// try and catch Statements in JavaScript

// The try statement allows yoi to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in a try block.

// We know that console.log(a); ReferenceError: a is not defined. Hence let's see an example:

console.log("Hello!");
console.log("What's up?");
let a = 5;
console.log(`a = ${a}`);
try {
    console.log(b);
} catch {
    console.log("Caught an Error: Variable 'b' is not defined.")
}
console.log("Goodbye!");
console.log("See you later.")