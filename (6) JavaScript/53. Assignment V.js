// Assignment-V

// Q1. Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return arr[i];
        }
    }
}
console.log(getElements(arr, num));

// Q2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
//          ans=“abcdefgh”
let str = "abcdabcdefgggh";

function uniqueChar(str) {
    let ans = "";
    for( let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (ans.indexOf(currentChar) == -1) {
            ans += currentChar;
        }
    }
    return ans;
}
console.log(uniqueChar(str));

// Q3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country = ["Australia","Germany","UnitedStatesofAmerica"]
//          output = "UnitedStatesofAmerica"
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currentLen = country[i].length;
        if (currentLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestName(country));

// Q4. Write a JavaScript function to count the number of vowels in a String argument.
let string = "apnacollege";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(string));

// Q5. Write a JavaScript function to generate a random number within a range(start, end).
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start + 1; // To include end
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));