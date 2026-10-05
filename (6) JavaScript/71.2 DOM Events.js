// DOM Events in JavaScript
// Events are signals that something has occurred. (User inputs / actions)

// 1. onclick (When an element is clicked)
function onClickEvent() {
    alert("Button clicked!");
    console.log("Button was clicked");
}

// 2. onmouseenter (When mouse enters an element)
function mouseEnterEvent() {
    console.log("You entered a button");
}

const btns = document.querySelectorAll(".btn");

for (const btn of btns) {
    btn.onclick = onClickEvent;
    btn.onmouseenter = mouseEnterEvent;
}

// 3. Event Listeners
// Event listeners allow us to listen for specific events (such as a click, key press, mouse movement, or form submission)
// It executes a function when that event occurs.

// Syntax:
// element.addEventListener(event, callbackFunction);

// Example:
// button.addEventListener("click", handleClick);
const eventListenerBtn = document.querySelector("#eventBtn");

// First callback
function greet() {
    console.log("Hello!");
}
// Second callback
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}
// Third callback
function showAlert() {
    alert("You clicked the button.");
}
// All three listeners execute on a single click.
eventListenerBtn.addEventListener("click", greet);
eventListenerBtn.addEventListener("click", changeColor);
eventListenerBtn.addEventListener("click", showAlert);

// 4. Event Listeners for Different HTML elements
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", paraClicked);

function paraClicked() {
    console.log("Paragraph was clicked!");
}

const divBox = document.querySelector(".box");
divBox.addEventListener("mouseenter", hoverDivBox);

function hoverDivBox() {
    console.log("Mouse pointer entered DivBox!!");
}

// 5. this in Event Listeners
// When 'this' is used inside an event listener callback, it refers to the element on which the event listener is attached.

const elements = document.querySelectorAll("h1, h2, p, .btn");

function highlightElement() {
    this.style.backgroundColor = "yellow"; // 'this signifies elements in headings variable
}

for (const element of elements) {
    element.addEventListener("click", highlightElement);
}

// 6. Keyboard Events
// Keyboard events occur when the user interacts with the keyboard, such as pressing or releasing a key.

const input = document.querySelector("#username");
// Fires when a key is pressed
input.addEventListener("keydown", function (event) {
    console.log("Key: ", event.key); // Prints the actual key value that was pressed
    console.log("Code: ", event.code); // Prints the physical key identifier on the keyboard.
    console.log("Key Pressed");
});
// Fires when a key is released
input.addEventListener("keyup", function () {
    console.log("Key Released");
});

// 7. Form Events
// Form events occur when a user interacts with an HTML form(such as submitting the form, entering data, resetting the form, or changing input values).
// They allow JavaScript to validate, process, or manipulate form data.

let form = document.querySelector("form");
form.addEventListener("submit", submitAction);

function submitAction(event) {
    event.preventDefault();
    console.log("Form Submitted!!!");
    // Extracting Form Data
    const name = document.querySelector("#name");
    const user = document.querySelector("#user");
    const password = document.querySelector("#password");

    console.log("Name entered:", name.value);
    console.log("Username entered:", user.value);
    console.log("Password entered:", password.value);
    alert(`Form Submitted!!!\nDear ${name.value}, Your email ${user.value} got password set to ${password.value}.`);
}

// 8. More Events
// (a) change Event
// It occurs when the value of an element has been changed.
// It only works on <input>, <textarea> and <select> elements.

// Fires after the value changes and the element loses focus (e.g., click outside or press Tab).
user.addEventListener("change", changeEvent);
function changeEvent() {
    console.log("CHANGE EVENT Input changed!!");
    console.log("Final value: ", user.value);
}

// (b) input Event
// It fires when the value of <input>, <textarea> and <select> element has been changed.

// Fires immediately whenever the value changes (every keystroke).
user.addEventListener("input", inputEvent);
function inputEvent() {
    console.log("INPUT EVENT Input changed!!");
    console.log("Final value: ", user.value);
}