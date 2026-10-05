// Assignment-VII

// Q1. Square and sum the array elements using arrow function and then find the average of the array.
let arr = [1, 2, 3, 4, 5];
let calcSq = arr.map( (num) => num * num);
console.log("Square: ", calcSq);

let calcSum = calcSq.reduce( (sum, num) => sum + num, 0);
let calcAvg = calcSum / arr.length;
console.log("Average: ", calcAvg);

// Q2. Create a new array using the map function whose each element is equal to the original element plus 5.
let nums = [2, 4, 6, 8, -2, -4];
let newNums = nums.map( (element) => element + 5);
console.log(newNums);

// Q3. Create a new array whose elements are in uppercase of words present in the original array.
let string = ["adam", "bob", "catlyn", "donald", "eve"];
let stringUpper = string.map( (subString) => subString.toUpperCase());
console.log(stringUpper); 

// Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map( (value) => value * 2)
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

// Q5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => (
    {...obj1, ...obj2}
);
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));