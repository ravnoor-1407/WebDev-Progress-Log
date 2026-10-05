// Callback Array Methods in JavaScript

// 1. forEach() method: executes a provided callback function once for every element in the array.

// a) Regular Arrays
let arr = [1,  2, 3, 4, 5];

let printElements = function (element) {
    console.log(element);
};
arr.forEach(printElements);

/* OR
arr.forEach(function (element) {
    console.log(element);
});
*/

// Nowadays for the same task we use for..of loop because for...of supports advanced control flow like break, continue, and await, while working on all iterable objects—not just arrays.

// b) Array of Objects
let arrObj = [{
    name: "ravnoor",
    marks: 95
}, 
{
    name: "jaisneet",
    marks: 97
}, 
{
    name: "jaiteg",
    marks: 96
}];
arrObj.forEach((student) => {
    console.log(student.name);
    console.log(student.marks);
});

// 2. map() method: creates a new array populated with the results of calling a provided function on every element in the calling array.
let num = [1, 2, 3, 4];

let doubledNum = num.map( (element) => {
    return element * 2;
});

console.log("Orignal array: ", num);
console.log("Array after doubling the elements: ", doubledNum);

// 3. filter() method: creates a shallow copy of a portion of a given array, containing only the elements that pass a conditional test implemented by a provided function.
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let evenNums = nums.filter( (element) => {
    return element % 2 == 0;

});


console.log("Original array: ", nums);
console.log("Even numbers array: ", evenNums);

// 4. every() method: returns true if every element of an array gives true for some function, else returns false.

let checkOdd = [1, 2, 3, 4].every( (element) => {
    return element % 2 != 0;
});
console.log(`Is [1, 2, 3, 4] an odd number array?`, checkOdd);

let checkEven = [2, 4].every( (element) => {
    return element % 2 == 0;
});
console.log(`Is [2, 4] a even number array?`, checkEven);

// 5. some() method: returns true if some elements of an array gives true for some function, else returns false.
checkOdd = [1, 2, 3, 4].some( (element) => {
    return element % 2 != 0;
});
console.log(`Does [1, 2, 3, 4] contains odd numbers?`, checkOdd);

checkEven = [2, 4].some( (element) => {
    return element % 2 == 0;
});
console.log(`Does [2, 4] contain even numbers?`, checkEven);

// 6. reduce() method: reduces an array to single value
let reduceArr = [1, 2, 3, 4].reduce( (result, element) => {
    return result + element;
});
console.log("[1, 2, 3, 4] reduced to: ", reduceArr);

// Finding Maximum number in an array
let actualArr = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let maxNum = actualArr.reduce( (max, element) => {
    if (element > max) {
        return element;
    } else {
        return max;
    }
});
console.log(`Maximum number in ${actualArr}: ${maxNum}`);