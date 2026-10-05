// Practice Question on DOM Methods

/*
Add the following elements to the container using JavaScript and DOM methods.
i) a <p> with red text that says "Hey! I'm red."
ii) an <h3> with blue text that says "I'm a blue h3."
iii) a <div> with a black border and pink background color with the following elements inside it:
    another <h1> that says "I'm in a div"
    a <p> that says "Me too!"
*/

// i) Create a <p> with red text
const paragraphOne = document.createElement("p");
paragraphOne.innerText = "Hey! I'm red.";
paragraphOne.style.color = "red";
document.querySelector("body").append(paragraphOne);

// ii) Create an <h3> with blue text
const heading3 = document.createElement("h3");
heading3.innerText = "I'm a blue h3.";
heading3.style.color = "blue";
document.querySelector("body").append(heading3);

// iii) Create a <div> with black border and pink background
const divBox = document.createElement("div");
divBox.style.border = "1px solid black";
divBox.style.backgroundColor = "pink";

// Add <h1> inside the div
const heading1 = document.createElement("h1");
heading1.innerText = "I'm in a div.";
divBox.appendChild(heading1);

// Add <p> inside the div
const paragraphTwo = document.createElement("p");
paragraphTwo.innerText = "Me too!";
divBox.appendChild(paragraphTwo);

// Append the div to the body
document.querySelector("body").append(divBox);