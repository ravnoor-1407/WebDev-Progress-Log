// Function Expressions in javaScript
// It defines a function as part of a larger expression syntax, typically by assigning it to a variable

// const variable = function(arg1, arg2, ....){
//     do or return something
// }

// Here it includes a nameless function

let sum = function(a, b) {
    return a + b;
}
console.log(sum(1, 2));

let greet = function() {
    console.log("hello");
}
greet();

// Updation or re-assignment just as basic variables
greet = function() {
    console.log("namaste");
}
greet();