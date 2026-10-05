// Promises in Asynchronous JavaScript
// It is an object in JavaScript that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success(data);
//     } else {
//         failure(data);
//     }
// }

// saveToDb("Data 1", (data) => {
//     console.log("SUCCESS: Your", data, "was saved.");
//     saveToDb("Data 2", (data) => {
//         console.log("SUCCESS2: Your", data, "was saved.");
//         saveToDb("Data 3", (data) => {
//             console.log("SUCCESS3: Your", data, "was saved.");
//         }, (data) => {
//             console.log("FAILURE3: Weak connection! Couldn't save", data);
//         });
//     }, (data) => {
//         console.log("FAILURE2: Weak connection! Couldn't save", data);
//     });
// }, (data) => {
//     console.log("FAILURE: Weak connection! Couldn't save", data);
// });

// Refactoring by craeting promise
function childPromise(task) {
    return new Promise((resolve, reject) => {
        let mood = Math.random() > 0.5; // happy or cranky

        if (mood) {
            resolve(`Child kept the promise: ${task} done!`);
        } else {
            reject(`Child broke the promise: ${task} not done.`);
        }
    });
}

// Using Promises Methods
// The .then() and .catch() methods are Promise methods used to handle the result of an asynchronous operation.

// (1) .then() handles the successful (fulfilled) result of a Promise.
// (2) .catch() handles the failed (rejected) result of a Promise.

childPromise("Clean the room")
    .then((msg) => {
        console.log(msg); // Promise fulfilled
    })
    .catch((err) => {
        console.log(err); // Promise rejected
    });