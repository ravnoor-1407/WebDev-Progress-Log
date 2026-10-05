// Document Object Model DOM in JavaScript
// The DOM represents a document with a logical tree.
// It allows us to manipulate/ change webpage content(HTML elements).

// 1. Selecting Elements

// (a) getElementById: returns the element as an object or null(if not found).
const mainImage = document.getElementById("mainImg");

console.log("===== getElementById() =====");
console.log(mainImage); // Prints the <img> element
console.dir(mainImage); // Prints the element as a JavaScript object
// Accessing properties
console.log(mainImage.src); // Image source
console.log(mainImage.tagName); // IMG
console.log(mainImage.id); // mainImg

// (b) getElementByClassName: returns the element as an HTML collection or empty collection(if not found).
const oldImages = document.getElementsByClassName("oldImg");

console.log("===== getElementsByClassName() =====");
console.log(oldImages);
// Display each image object
for (let i = 0; i < oldImages.length; i++) {
    console.dir(oldImages[i]);
}

// Manipulation Example: Change the source of all three images
for (let i = 0; i < oldImages.length; i++) {
    oldImages[i].src = "assets/spiderman_img.png";
    console.log(`Image ${i + 1} source changed.`);
}

// (c)getElementByTagName: returns the element as an HTML collection or empty collection(if not found).
const paragraphs = document.getElementsByTagName("p");
console.log("===== getElementsByTagName() =====");
console.log(paragraphs);

// 2. Query Selector: Allows us to use any CSS selector
// querySelector() → Returns the first matching element.
// querySelectorAll() → Returns all matching elements as a static NodeList.
// Any valid CSS selector can be used.

console.log("===== querySelector() =====");
console.dir(document.querySelector("h1")); // First <h1>
console.dir(document.querySelector("#description")); // Element with id="description"
console.dir(document.querySelector(".oldImg")); // First element with class="oldImg"

console.log("===== querySelectorAll() =====");
console.dir(document.querySelectorAll("li a")); // All anchor tags inside <li>

// 3. Setting Content in Objects
// (a) innerHTML: shows the complete HTML markup
// (b) innerText: shows the visible text contained in a node
// (c) textContent: shows all text, including hidden text.

const firstParagraph = document.querySelector("p");

console.log("===== Content Properties =====");
console.log(firstParagraph.innerText);
console.log(firstParagraph.innerHTML);
console.log(firstParagraph.textContent);

// 4. Attribute Manipulation

// getAttribute(attributeName); Returns the value of specified attribute
// Object.setAttribute(attr, value); Sets or updates the value of the specified attribute

console.log("===== Attribute Manipulation =====");

// Get attribute values
console.log(mainImage.getAttribute("id"));
console.log(mainImage.getAttribute("src"));

// Change the image source
mainImage.setAttribute("src", "assets/creation_1.png");
// Change the image id
// mainImage.setAttribute("id", "spidermanImg");

// Verify changes
console.log(mainImage.getAttribute("src"));
console.log(mainImage.getAttribute("id"));

// 5. Manipulating Style: It sets the inline styling for the elements

// (a) element.style(); Used for inline CSS styles.
console.log("===== Style Manipulation =====");
// Change heading color
const mainHeading = document.querySelector("h1");
mainHeading.style.color = "green";
mainHeading.style.backgroundColor = "yellow";

// Change image border
mainImage.style.border = "4px solid black";

// Change paragraph background
const description = document.querySelector("#description");
description.style.backgroundColor = "lightyellow";
description.style.color = "darkblue";

//(b) Using classList

// i. classList.add() to add new classes
// ii. classList.remove() to remove classes
// iii. classList.contains() to check if class exists
// iv. classList.toggle() to toggle between add and remove

const boxElement = document.querySelector(".box");

// Check existing class
console.log(boxElement.classList);

// Check if class exists
console.log(boxElement.classList.contains("box"));

// Add a new class
boxElement.classList.add("highlight-green");

// Remove the class
boxElement.classList.remove("highlight-green");

// Toggle the class
boxElement.classList.toggle("highlight-green");

// 6. Navigation Properties
// These properties help us navigate through the DOM tree.
// parentElement          → Returns the parent element.
// children               → Returns an HTMLCollection of child elements.
// previousElementSibling → Returns the previous sibling element.
// nextElementSibling     → Returns the next sibling element.

console.log("===== Navigation Properties =====");

// (a) parentElement
const firstLink = document.querySelector("a");
console.log(firstLink);
console.log(firstLink.parentElement);      // Parent <p> element
console.log(firstLink.parentElement.parentElement); // <body> element

// (b) children
const boxNav = document.querySelector(".box");
console.log(boxNav.children);      // All direct children of .box
console.log(boxNav.children[0]);   // <h4>
console.log(boxNav.children[1]);   // <ul>

// (c) previousElementSibling AND nextElementSibling
const heading2 = document.querySelector("h2");
console.log(heading2);                              // First <h2> ("About")
console.log(heading2.nextElementSibling);           // First <p>
console.log(heading2.nextElementSibling.nextElementSibling); // .box

const descriptionNav = document.querySelector("#description");
console.log(descriptionNav.previousElementSibling);    // Second <h2>
console.log(descriptionNav.nextElementSibling);        // .images div

// 7. Adding Elements

// document.createElement(tagName); → Creates a new HTML element.
// appendChild(element) → Adds a child element as the last child.
// append(content) → Adds text or element(s) at the end
// prepend(content) → Adds text or element(s) at the beginning.
// insertAdjacent(position, element) → Inserts an element relative to another element.

// Positions:
// "beforebegin"
// "afterbegin"
// "beforeend"
// "afterend"

console.log("===== Adding Elements =====");

// createElement()
const newButton = document.createElement("button");
newButton.innerText = "Click Me";
console.log(newButton);

// appendChild()
// Add the button at the end of the .box div
const box = document.querySelector(".box");
box.appendChild(newButton);

// append()
// Adds content at the end
const heading = document.querySelector("h1");
heading.append(" - Friendly Neighborhood Hero");

// prepend()
// Adds content at the beginning
heading.prepend("🕷️ ");

// insertAdjacentElement()
// Inserts an element relative to another element
const newPara = document.createElement("p");
newPara.innerText = "Spider-Man is one of Marvel's most popular superheroes.";

// Insert after the first <h2> ("About")
const aboutHeading = document.querySelector("h2");
aboutHeading.insertAdjacentElement("afterend", newPara);
// 8. Removing Elements
// element.removeChild(child): Removes a specified child element from its parent.
// element.remove(): Removes the element itself from the DOM.

console.log("===== Removing Elements =====");

// removeChild()
// Remove the "Click Me" button from the .box div
const boxRemove = document.querySelector(".box");
const buttonRemove = document.querySelector("button");

box.removeChild(buttonRemove);

// remove()
// Remove the first old image
const firstOldImage = document.querySelector(".oldImg");
firstOldImage.remove();

// Remove the paragraph inserted after the "About" heading
const insertedParagraph = aboutHeading.nextElementSibling;
insertedParagraph.remove();