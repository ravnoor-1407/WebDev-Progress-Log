// Scope in JavaScript
// Scope determines the accessibility of variables, objects, and functions from different parts of code.

// (a) Global Scope: Variables declared outside of any function or block, making it accessible from anywhere in your entire script.
let sum = 9; // This variable has a global scope
console.log("GLOBAL SCOPE sum = ", sum);

// (b) Function Scope: Variables defined inside a function arevnot accessible(visible) from outside the function,
function calcSum(a, b) {
    let sum = a + b; // This variable has a function scope
    console.log("FUNCTION SCOPE sum = ", sum);
}
calcSum(1,2);
// console.log(sum); This gives an ReferenceError: sum is not defined (outside the function)

// (c) Block Scope: Variables declared inside a block {} cannot be accessed from outside the block.
{
    let a = 25; // This variable has a block scope
    console.log("BLOCK SCOPE a = ", a);
}
// console.log(a); This gives an ReferenceError: a is not defined (outside the block)

// (d) Lexical Scope: Variable defined in outer function can be accessible inside inner function defined after variable declaration.
// But, the variable defined in inner function is not accessible in outer function

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log("x defined in outerFunc: ", x);
        console.log("y defined in outerFunc: ", y);
        console.log("z defined in outerFunc: ", z); // These variables has lexical scope
    }
    let z = 7; // Hoisting applied
    innerFunc();
}
outerFunc();

// Notice that we can access the value of 'z' in function definition before the variable declaration
// Hoisting is the concept of moving all variable and function declarations to the top of the current scope before the code runs.