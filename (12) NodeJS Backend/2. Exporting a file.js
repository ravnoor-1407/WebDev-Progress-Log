// Export in JS files (Node.js Backend)
// You can export variables, functions, or classes from a module using the `module.exports` object. 
// Here's an example of how to export and import in Node.js:

// (1) CommonJS Module System (Default in Node.js)
// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     greeting: "Hello, Welcome to NodeJS",
//     sum: sum,
//     multiply: multiply,
//     g: g,
//     PI: PI
// };

// module.exports = obj;


// (2) ES6 Module System
export const welcomeMsg = "Hello, Welcome to NodeJS";
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const g = 9.8;
export const PI = 3.14;
export const successMsg = "Data exported successfully";

// Check the 1.Intro and Process Object.js for the import part of this file. 
// You can import the exported value using `require()` function in another file.