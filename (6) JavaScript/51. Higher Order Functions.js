// Higher Order Functions in JavaScript 
// A function that does one or both:
// (a) takes one or multiple functions as arguments
// (b) returns a function

function multiplegreet(func, count) {
    for(let i = 1; i <= count; i++){
        func();
    }
}
let greet = function() {
    console.log("hello");
}

multiplegreet(greet, 5); // This function is a higher order function.
// Here, multipleGreet() takes greet() function as one of its arguments.

function oddEvenTest(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if (request == "even") {
        let even = function(n) {
            console.log(n % 2 == 0);
        }
        return even;
    } else {
        console.log("Wrong request");
    }
}
// To check odd numbers by assigning function in variable
let checkOdd = oddEvenTest("odd");
checkOdd(5);  // true (since 5 is odd)
checkOdd(8);  // false (since 8 is even)

// To check even numbers by assigning function in variable
let checkEven = oddEvenTest("even");
checkEven(7);  // false (since 7 is odd)
checkEven(4);  // true (since 4 is even)

oddEvenTest("prime");  // prints "Wrong request"

// oddEvenTest: A factory function is a function that creates and returns other functions.
// Instead of producing physical goods like a real factory, it produces new functions customized for a specific purpose.

// Input:
// Here the function takes input string:  "odd" or "even". This decides what kind of "checker function" the factory will produce.

// factory Behaviour:
// If request == "odd" → it returns a new function that checks if a number is odd.
// If request == "even" → it returns a new function that checks if a number is even.