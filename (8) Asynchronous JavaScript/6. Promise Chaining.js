// Promise Chaining in Asynchronous JavaScript
// It is a technique where multiple asynchronous operations are executed one after another by chaining multiple .then() methods together.
// Each .then() returns a new Promise, allowing the next .then() to wait for the previous operation to complete.

// 🍔 Food Delivery Analogy
// Imagine you order food online. The process has steps that depend on each other:

// 1. Restaurant accepts the order
// 2. Food is prepared
// 3. Delivery person picks it up
// 4. Food arrives at your home

// Each step is a Promise. If one fails, the chain breaks.

function orderFood() {
    return new Promise((resolve, reject) => {
        let accepted = Math.random() > 0.2; // 80% chance accepted
        if (accepted) resolve("🍽️ Order accepted by restaurant");
        else reject("❌ Order rejected!");
    });
}

function prepareFood() {
    return new Promise((resolve, reject) => {
        let cooked = Math.random() > 0.2; // 80% chance cooked
        if (cooked) resolve("👨‍🍳 Food prepared successfully");
        else reject("🥲 Kitchen ran out of ingredients!");
    });
}

function deliverFood() {
    return new Promise((resolve, reject) => {
        let delivered = Math.random() > 0.2; // 80% chance delivered
        if (delivered) resolve("🚚 Food delivered to your home");
        else reject("🗺️ Delivery person got lost!");
    });
}

// Promise chaining with emojis
orderFood() // Task 1 checked
    .then((msg) => { 
        console.log(msg); // Task 1 fulfilled
        return prepareFood(); // Task 2 checked
    })
    .then((msg) => {
        console.log(msg); // Task 2 fulfilled
        return deliverFood(); // Task 3 checked
    })
    .then((msg) => {
        console.log(msg); // Task 3 fulfilled
        console.log("😋 You enjoy your meal!"); // Ending note
    })
    .catch((err) => {
        console.log("⚠️ Process failed:", err); // If error catched, it is handled and further execution stops
    });