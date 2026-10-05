// Functions In JavaScript
// Functions in JavaScript are reusable blocks of code designed to perform specific tasks.
// They reduce code repetition, make programs easier to organize, and execute whenever they are invoked (called).

// Function Definition (telling JS)
// function funcName() {
//     do something
// }

// Function Calling (using JS)
// funcName();

function greet() {
    console.log("Good morning cuties!");
}
greet();

function printNum() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
}
printNum();

function isAdult() {
    let age = 13;
    if (age >= 18){
        console.log("You're an adult.");
    } else {
        console.log(`Oh! You're just ${18 - age} year(s) younger to be an adult.`);
        console.log("Wait till 18 to be an adult!");
    }
}
isAdult();

// Functions with Arguments: Value we pass to function
//function funcName(arg1, arg2, ...) {
//     do something
// }

function printName(name) {
    console.log(name);
}
printName("Ravnoor Kaur");

function printInfo(name, age) {
    comsole.log(`${name}'s age is ${age}`);
}
printInfo("Ravnoor", 19);
printInfo("Jaiteg");
// printInfo(10);  Values get passed in order they are defined in a function

function sum(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
sum(7, 8);

// return Keyword: It is used to return some value from the function.
//function funcName(arg1, arg2, ...) {
//     do something
//     return val;
// }

// Writing the return keyword never prints anything to the screen by itself.
// It only hands the value back to the computer's memory silently.
// If you want to see that value on your screen, you must explicitly tell JavaScript to show it by wrapping the code in a tool like console.log().

// Option 1: Direct Printing (No Variable)
// You can drop the function directly into console.log(). 
// JavaScript evaluates the function first, gets the returned value, and immediately prints it.

function getName() {
    return "Alex";
}

// Direct print
console.log(getName()); // Outputs: Alex

// Option 2: Storing in a Variable First
// This approach is only necessary if you plan to use that returned data multiple times later in your code.
function getName() {
    return "Alex";
}

// Stored first, then printed
let user = getName();
console.log(user); // Outputs: Alex