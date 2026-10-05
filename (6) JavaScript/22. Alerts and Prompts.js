// Alerts and Prompts in JavaScript

// Alert displays an alert message on the page.
// Prompt displays a dialog box that asks user for some input.
const prompt = require('prompt-sync')();

alert("Welcome to the JavaScript World!");
console.log("This is basic log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");

let name = prompt("Introduce yourself!");
let message = "Hello" + name;
alert(message);