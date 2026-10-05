// Refactoring Callback Hell(4.1 & 4.2) using Promises

const h1 = document.querySelector("h1");

// Function to change color with delay and optional next step
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resolve("Color changed to " + color);
        }, delay);
    });
}

// Using the changeColor function with Promises
changeColor("red", 1000)
    .then(() => {
        console.log("Red color changed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange color changed");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("Yellow color changed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("Green color changed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue color changed");
        return changeColor("darkblue", 1000);
    })
    .then(() => {
        console.log("Dark blue color changed" );
        return changeColor("Purple", 1000);
    })
    .catch((error) => {
        console.error(error);
    });