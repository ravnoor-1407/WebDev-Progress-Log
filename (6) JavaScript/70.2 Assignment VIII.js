// Assignment-VIII

// Q1. Create a new input and button element on the page using JavaScript only. 
// Set the text of button to “Click me”;
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Clickme";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Q2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

// Q3. Access the btn using the querySelector and button id. 
// Change the button background color to blue and text color to white.
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";
document.body.append(btn);

// Q4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
heading.style.color = "purple";
document.body.append(heading);

// Q5. Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold
let paragraph = document.createElement("p");
paragraph.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.append(paragraph);
