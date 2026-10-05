// Assignment-II

const prompt = require('prompt-sync')();

// Q1 Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example:for array [7,9,0,-2]and n = 3
// Print, [7,9,0]
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));

// Q2 Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
// For example:for array [7,9,0,-2]and n = 3
// Print, [9,0,-2]
let array = [7, 9, 0, -2];
console.log(array.length - n);

// Q3 Write a JavaScript program to check whether a string is blank or not.
let str = prompt("Please enter a string: ");
if(str.length == 0) {
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");
}

// Q4 Write a JavaScript program to test whether the character at the given (character) index is lowercase.
let string = "APNAcollege";
console.log(string);
let index = prompt("Enter the index to search for in the string: ");
if (string[index] == string[index].toLowerCase()) {
    console.log(`Character ${string[index]} at index ${index} is lowercase.`);
} else {
    console.log(`Character ${string[index]} at index ${index} is not lowercase.`);
}

// Q5 Write a JavaScript program to strip leading and trailing spaces from a string
let greet = prompt("Greet me: ");
console.log(`Original string: ${greet}`);
console.log(`String without spaces: ${greet.trim()}`);

// Q6 Write a JavaScript program to check if an element exists in an array or not.
let data = ["hello", 'a', 23, 46, 99, 64, -6];
let detail = 64;

if (data.indexOf(detail) != -1) {
    console.log("Element does exist in an array");
} else {
    console.log("Element does not exists in an array.");
}