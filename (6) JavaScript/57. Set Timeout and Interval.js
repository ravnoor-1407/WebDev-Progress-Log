// Set Timeout and Interval in JavaScript

// The setTimeout() method executes a specified function or block of code exactly once after a designated delay (measured in milliseconds).
// It is generally used for API calls and request response.

console.log("Hi there!");

setTimeout( () => {
    console.log("Apna College");
}, 2000)

console.log("Welcome to");

// The The JavaScript setInterval() method repeatedly calls a function or executes a code snippet with a fixed time delay between each call. 
// It returns a unique interval ID which you can pass to clearInterval() to stop the loop.

let id = setInterval( () => {
    console.log("Goodbye!")
}, 4000);

clearInterval(id); // to stop execution