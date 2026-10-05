// Practice Questions on Scope

// Q1. What will be the output
let greet = "hello"; //Global Scope

function changeGreet() {
    let greet = "namaste";
    console.log(greet); // namaste (Function Scope)
    function innerGreet() {
        console.log(greet); // namaste (Lexical Scope)
    }
}
console.log(greet); // hello (Global Scope)
changeGreet();

// Output: 
// hello
// namaste

// innerGreet function is never called hence no another Namaste for Lexical Scope.