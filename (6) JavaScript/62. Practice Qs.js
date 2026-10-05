// Practice Questions on Callback Array Methods

// Q1. Check if all numbers in our array are multiples of 10 or not.
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arr2 = [10, 11, 20, 22, 30, 33, 40, 44, 50, 55];

let tenMultiple = arr1.every( (element) => {
    return (element % 10 == 0);
});

let notTenMultiple = arr2.every( (element) => {
    return (element % 10 == 0);
});
console.log(`Does this array ${arr1} contains multiples of 10? ${tenMultiple}`);
console.log(`Does this array ${arr2} contains multiples of 10? ${notTenMultiple}`);

// Q2. Create a function to find the minimum number in an array.
let actualArr = [9, 13, 8, 7, 3, 6, 14, 4, 2, 1, 0, 11, 15];

let minNum = actualArr.reduce( (min, element) => {
    if (element > min) {
        return min;
    } else {
        return element;
    }
});

console.log(`Minimum number in ${actualArr} is: ${minNum}`);