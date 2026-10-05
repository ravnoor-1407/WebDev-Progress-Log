// Results and Errors in Promises
// Promises are resolved or rejected with some data(valid result or error). 
// In JavaScript Promises:

// • Result is the value returned when a Promise is fulfilled (resolved).
// • Error is the reason returned when a Promise is rejected.
// These values are received using the .then() and .catch() methods.

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 100) + 1; // Simulating internet speed in Mbps
        if (internetSpeed > 50) {
            resolve(`Data saved successfully: ${data}`);
        } else {
            reject(`Error: Internet speed too slow (${internetSpeed} Mbps)`);
        }
    });
}

saveToDb("Programming Languages are fun!")
    .then((result) => {
        console.log("Data1 saved");
        console.log("Result of promise 1:", result);
        return saveToDb("JavaScript is awesome!");
    })
    .then((result) => {
        console.log("Data2 saved");
        console.log("Result of promise 2:", result);
        return saveToDb("Web Development is exciting!");
    })
    .then((result) => {
        console.log("Data3 saved");
        console.log("Result of promise 3:", result);
    })
    .catch((error) => {
        console.error("Promise was rejected!");
        console.error(error);
    });