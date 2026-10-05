// 1. Introduction to NodeJS

// Node.js is a JavaScript Runtime Environment that allows you to run JavaScript code outside of a web browser. 
// It is built on Chrome's V8 JavaScript engine and is designed to build scalable network applications. 
// Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient for handling concurrent connections.

// Node REPL (Read-Eval-Print Loop) is an interactive shell that allows you to execute JavaScript code in real-time.
// You can start the Node REPL by typing `node` in your terminal or command prompt.

// Accessing and running JavaScript code in Nodjs

let n = 5;
for (let i = 1; i <= n; i++) {
    console.log("Hello, ", i);
}
console.log("Bye");

// 2. Process Object in Node.js
// It provides information about the current Node.js process and allows you to control over it.
// Some commonly used properties and methods of the process object include:
// - process.argv: An array containing the command-line arguments passed when the Node.js process was launched.
// - process.env: An object containing the user environment.
// - process.exit(): A method to terminate the Node.js process with an optional exit code.
let args = process.argv;
console.log("Command-line arguments:", args);

// In terminal, you can run the script with additional arguments like this:
// node 1. Intro to NodeJS.js arg1 arg2 arg3
// The output will display the command-line arguments passed to the script.
for (let i = 0; i < args.length; i++) {
    console.log("Hello Welcome to NodeJS", args[i]);
}
// 3. Importing a file in Node.js (CommonJS Module System)
// const importedFile = require('./2. Export in Files.js');
// console.log("Imported data: ", importedFile);

// 4. Importing a file in Node.js (ES6 Module System)
import { welcomeMsg, sum, multiply, g, PI, successMsg } from './2. Exporting a file.js';

console.log(welcomeMsg); // Hello, Welcome to NodeJS
console.log(sum(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(g);         // 9.8
console.log(PI);        // 3.14
console.log(successMsg); // Data exported successfully
// If no data is exported from the file, it will return an empty object{}.

// 5. Importing a directory in Node.js
import { apple, banana, orange } from "./Exporting a directory/index.js";

console.log(apple);
console.log(banana);
console.log(orange);

// 6. NPM (Node Package Manager) 'Library of Packages' in Node.js
// It is the standard package manager for Node.js, allowing you to install and manage third-party libraries and packages.
// It is a command-line tool that comes bundled with Node.js and provides access to a vast ecosystem of open-source packages.

// node_modules: It is a directory where all the installed packages and their dependencies are stored.
// package.json: It is a file that contains descriptive and functional metadata about the project, including its name, version, dependencies, scripts, and other configurations.
// package-lock.json: It is a file that contains the exact versions of the installed packages and their dependencies, ensuring consistent installations across different environments.

// Suppose somehow my node_modules folder is deleted 
// Then I can run the command `npm install` in the terminal to reinstall all the packages listed in package.json and package-lock.json files.

// 7. npm Commands in Node.js
// npm init: It is a command used to create a new Node.js project and generate a package.json file.
// npm install -g <package-name>: It is a command used to install a package globally, making it accessible from anywhere on your system.
// npm link <package-name>: It is a command used to create a symbolic link to a package, allowing you to use it as if it were installed globally.
// npm install <package-name>: It is a command used to install a package locally, making it accessible only within the current project.