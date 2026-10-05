// Async and Await Functions

// async and await are JavaScript keywords that make asynchronous code look and behave like synchronous code, making it easier to read and write.

// async is used to declare an asynchronous function(i.e. a function that returns a Promise).
// If function is executed normally, it will return fulfilled state.
// If we want return something, the function returns fulfilled state and return value.
// If any error occurs, it will return rejected state and error message.

async function greet() {
    // throw "💥 Something went wrong"; // rejected state
    return "👋 Hello"; // fulfilled state
}

greet()
    .then((result) => {
        console.log("✅ Promise was resolved successfully!");
        console.log("🎉 Result:", result);
    })
    .catch((error) => {
        console.log("❌ Promise was rejected!");
        console.error("⚠️ Error details:", error);
    });


// await is used inside an async function to pause execution until a Promise settles(resolved or rejected).

async function getNumber() {
    console.log("🔢 Fetching number...");
    return new Promise((resolve, reject) => {   // ✅ return added here
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber < 5) {
                console.log("✅ Number is acceptable:", randomNumber);
                resolve(randomNumber); // fulfilled state
            } else {
                console.log("❌ Number is too high:", randomNumber);
                reject("Number is too high!"); // rejected state
            }
        }, 1000);
    });
}

async function demo() {
    console.log("🚀 Starting demo...");
    try {
        for (let i = 1; i <= 5; i++) {
            const num = await getNumber();
            console.log(`🎯 Number ${i} received:`, num);
        }
        console.log("🏆 Demo finished successfully!");
    } catch (err) {
        console.error("💥 Demo stopped due to error:", err);
    } finally {
        console.log("🔚 Demo complete");
    }
}

demo();