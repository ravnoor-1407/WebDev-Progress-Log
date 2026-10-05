// Callback Hell in Asynchronous JavaScript
// Callback Hell is a situation where multiple asynchronous operations are nested inside one another using callbacks.
// This leads to code becoming difficult to read, understand, debug, and maintain.

const h1 = document.querySelector("h1");

// Function to change color with delay and optional next step
function changeColor(color, delay, nextColorChange){
    setTimeout( () => {
        h1.style.color = color;
                // If another color change is provided, call it
        if(nextColorChange) {
            nextColorChange();
        }
    }, delay);
}
// Start the chain of color changes callbacks (callback hell)
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("yellow", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("blue", 1000, () => {
                    changeColor("indigo", 1000, () => {
                        changeColor("violet", 1000);
                    });
                });
            });
        });
    });
});