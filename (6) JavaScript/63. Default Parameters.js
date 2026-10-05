// Default Parameters in JavaScript
// Giving a default value to the arguments.

// Suppose in a function to calculate sum, we want to assign only value for variable 'a' so we can give a default value to variable 'b'.
function calcSum (a, b = 2) {
    return a + b;
};
console.log(calcSum(1, 4)); // a = 1, b = 4
console.log(calcSum(4)); // a = 4

// In case we want to assign value to a in initial step, and then call function it gives error:
// function calcSum (a = 2, b) {
//     return a + b;
// };
// console.log(calcSum(1, 4));  5 (a = 1, b = 4)
// console.log(calcSum(4)); NaN (a = 4, b = undefined)