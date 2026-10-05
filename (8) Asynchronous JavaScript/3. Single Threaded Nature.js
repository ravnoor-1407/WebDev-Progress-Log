// Single Threaded Nature of JavaScript

// JavaScript is a single-threaded programming language.
// It means it can execute only one task (or one line of code) at a time using a single call stack.
// It cannot execute multiple pieces of JavaScript code simultaneously on the main thread.

setTimeout( () => {
    console.log("Myself Ravnoor");
}, 2000);

setTimeout( () => {
    console.log("Second-year CSE Student");
}, 4000);

console.log("Hello!");

// NOTE: Here we might think that JS should wait for setTimeout to execute before printing "Hello!"
// setTimeout() does not pause JavaScript execution.
// It only registers a timer with the browser or runtime. The callback is scheduled to run after the delay has elapsed and only when the Call Stack is empty.
// This behavior is the foundation of asynchronous JavaScript.


// What JavaScript actually does:

// Step 1: First setTimeout()

// 1. It calls the setTimeout() function.
// 2. setTimeout() tells the browser (or Node.js runtime):
//     "Please run this callback after at least 2 seconds."
// 3. The browser starts a 2-second timer.
// 4. JavaScript does not wait. It immediately moves to the next line.

// Step 2: Second setTimeout()

// The browser starts another timer for 4 seconds.
// Again, JavaScript does not wait.

// Step 3: console.log("Hello!");
// Since nothing is blocking the call stack, it executes immediately.

// Step 4: After 2 seconds
// The browser's timer finishes, it tells JS that callback is ready.
// When callback becomes empty, JavaScript executes.

// Step 5: After 4 seconds
// The second timer finishes, JavaScript executes.