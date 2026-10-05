// Assignment-VI

// Q1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arr = [1, 2, 3, 4, 5, 6];

const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length
};

console.log(arrayAverage(arr));

// Q2. Write an arrow function named isEven() that takes a singke number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => {
    return num % 2 == 0;
};

console.log(isEven(num));

// Q3. Predict the output:
const obj = {
    message: 'Hello,World!',
    logMessage: function () {
        // 'this' refers to obj because logMessage is called using obj.logMessage()
        console.log(this.message); // Prints undefined
    }
};
// After 1 second, the arrow function calls obj.logMessage()
// Since the method is invoked using obj, 'this' refers to obj
setTimeout( () => obj.logMessage(), 1000); // Prints Hello,World!

// Q4. Predict the output
let length = 4;
function callback() {
    // 'this' refers to the global object because callback() is called as a normal function
    console.log(this.length);
}

const object = {
    length: 5,
    method: function (callback) {
        // callback is invoked as a regular function, not as object.callback()
        callback();
    },
};
// callback() prints the global length (or undefined depending on the environment node.js)
// method() itself returns undefined, so console.log prints undefined.
console.log(object.method(callback, 1, 2));