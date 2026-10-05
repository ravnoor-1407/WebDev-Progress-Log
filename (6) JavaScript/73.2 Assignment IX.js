// Assignment-IX

// Q1. Try out the following events in Event Listener on your own:
//     -mouseout
//     -keypress
//     -Scroll
//     -load

// mouseout event
document.body.addEventListener("mouseout", () => {
    console.log("Mouse moved out of the body!");
});

// keypress event
document.addEventListener("keypress", (event) => {
    console.log("Key pressed:", event.key);
});

// scroll event
window.addEventListener("scroll", () => {
    console.log("You are scrolling the page!");
});

// load event
window.addEventListener("load", () => {
    console.log("Page fully loaded!");
});


// Q2. Create a button on the page using JavaScript.
// Add an event listener to the button that changes the button’s color to green when it is clicked.
// Create button
let btn = document.getElementById("colorBtn");

// Event listener for color change
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});


// Q3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name 
// So that, it should only input letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]

// Create input element
let input = document.getElementById("nameInput");
let heading = document.getElementById("heading");

// Event listener for input
input.addEventListener("input", () => {
    // Allow only letters (a-z, A-Z) and spaces
    let filtered = input.value.replace(/[^a-zA-Z\s]/g, "");
    
    // Update heading dynamically
    heading.innerText = filtered;
});
