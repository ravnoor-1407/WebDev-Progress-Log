// String, String Indices & Methods in JavaScript
// Strings are text or sequences of characters enclosed in single quotes, double quotes, or backticks.

let firstname = 'Ravnoor' // Using single quotes
let city = "Phagwara" // Using double quotes
let bloodGroup = 'B+';
let age = '19';
let address = '';
let intro = 'Myself Ravnoor, a BTech CSE student from "Lovely Professional University, Phagwara, Punjab, India".';

console.log(firstname);
console.log(city);
console.log(bloodGroup);
console.log(age);
console.log(address);
console.log(intro);

// Template Literals: Basically, a string with back-tick (`)
// They are used to add embedded expressions and multi-line strings. 
// Template literals allow for easier string interpolation and formatting.

let obj = {
    item: "Pen",
    price: 20,
};
let output = `The cost of ${obj.item} is Rs. ${obj.price} only.`
console.log(output); // using template literals

console.log("The cost of", obj.item, "is Rs.", obj.price, "only."); //Conventional way

// String Indices: Each character in a string has an index, starting from 0.
let greet = "Hello World";
console.log(greet[0]); 
console.log(greet[1]);
console.log(greet[2]);
console.log(greet[3]);
console.log(greet[4]);

// String Interpolation: To create string by doing substitution of placeholders.
template = `The sum of 1,2 and 3 is ${1+2+3}`
console.log(template);

// Escape Characters:
// In JavaScript, escape characters are written with a backslash (\) to represent special characters inside strings.
// Examples: newlines (\n), tabs (\t), quotes (\" or \'), and Unicode characters (\uXXXX). 

// String Length
let str = "Hello, World!";
console.log(str.length); // returns the length of the string

//String Concatenation
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
// Another way: let result = `${str1} ${str2}`; Using template literals
// Another way: let result = str1.concat(" ", str2); Using concat() method
console.log(result); // Output: Hello World

// String Methods 
// They are actions that can be performed on objects.

// Keep in mind that strings are immutable which means no changes can be done.
// So whenever we apply any string method, a new string is created and old one remains same.
let a = "    Hello World    ";
console.log(a.trim()); // removes the whitespaces in start or end of a string
console.log(a.toUpperCase());
console.log(a.toLowerCase());

// String Method with Arguments

// 1. indexOf() returns the first index of occurence of some value in string.
// If not found, it gives -1.

let msg = "ILoveCoding";
console.log(msg.indexOf("Love")); // 1
console.log(msg.indexOf("J")); // -1
console.log(msg.indexOf("o")); // 2

// Method Chaining
let name = "  Ravnoor Kaur  ";
let newName = name.trim();
console.log("After trim: ", newName);
newName = newName.toUpperCase();
console.log("After uppercase: ", newName);

console.log("Using method chaining: ", name.trim().toUpperCase());

// 2. slice() returns a part  of original string as new string.
// string.slice(start, end) -> end index is not inclusive.
let jsMsg = "ILoveJavaScript";
console.log(jsMsg.slice(5));
console.log(jsMsg.slice(1, 5));
console.log(jsMsg.slice(-6)); // len - index = 15 - 6 = 9

// 3. replace() returns a string with replacing desited character(s)
console.log(jsMsg.replace("love", "do"));

// 4. repeat() returns a string with the number of copies of a string.
let fruit = "Mango";
console.log(fruit.repeat(3));