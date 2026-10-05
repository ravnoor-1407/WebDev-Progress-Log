// Handling Errors in Async/Await Functions

// In JavaScript, when using async/await, errors can be handled using try/catch blocks. 
// This allows you to catch any errors that occur during the execution of an asynchronous function and handle them gracefully.

async function printRandomNumber() {
    try {
        let number = await getRandomNumber();
        console.log("Generated number:", number); // If the Promise resolves successfully, log the number
    } catch (error) {
        console.error("Error:", error.message); // If the Promise is rejected, log the error message
    }
}

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10); // 0–9
        if (num < 8) {
            resolve(num); // success most of the time
        } else {
            reject(new Error("Number too high!")); // simulate rejection
        }
    });
}

// Run multiple times to see success + error cases
for (let i = 0; i < 5; i++) {
    printRandomNumber();
}

// Here, `printRandomNumber` is an async function that calls `getRandomNumber`, which returns a Promise.
// If the number generated is less than 8, the Promise resolves successfully; otherwise, it rejects with an error.
// The try/catch block in `printRandomNumber` handles both cases, logging the result or the error message accordingly.