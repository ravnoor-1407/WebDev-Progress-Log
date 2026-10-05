// Assignment-III\

// Q1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: if arr = [1,2,3,4,5,6,2,3] & num = 2. 
// Result should be arr = [1,3,4,5,6,3]
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log("Array after removing 2: ", arr);

// Q2. Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6
let number = 287152;
let count = 0;
let copy = number;

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log("Count of digits: ", count);

// Q3. Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25
let no = 287152;
let sum = 0;
let duplicate = no;

while (duplicate > 0) {
    let digit = duplicate % 10;
    sum += digit;
    duplicate = Math.floor(duplicate / 10);
}
console.log("Sum of digits: ", sum);

// Q4. Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example:7!(factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5!(factorial of 5)= 1x2x3x4x5 = 120
// 3!(factorial of 3)= 1x2x3 = 6
// 0! Is always 1
let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n} is`, factorial);

// Q5. Find the largest number in an array with only positive numbers.
let array = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
        largest = array[i];
    }
}

console.log("Largest number in an array:", largest);