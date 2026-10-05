// Event Bubbling in JavaScript
// It is a default browser mechanism where an event triggers on a child element and then propagates upward through its parent elements in the Document Object Model (DOM) tree. 

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let listItems = document.querySelectorAll("li");

div.addEventListener("click", () => {
    console.log("Div was clicked!!");
});

ul.addEventListener("click", (event) => {
//  event.stopPropagation();   -> terminates event bubbling mechanism
    console.log("Unordered list was clicked!!");
});

for (li of listItems){
    li.addEventListener("click", () => {
        console.log("List item was clicked!!");
    });
}

// Here for nested HTML elements if we trigger the child element the parent element is also automaticaaly triggered.