// ToDo App using Events

// Select elements from the DOM
let btn = document.querySelector("button");   // The "Add Task" button
let ul = document.querySelector("ul");        // The <ul> list where tasks will be added
let inPut = document.querySelector("input");  // The input field for entering tasks

// Event listener for "Add Task" button
btn.addEventListener("click", () => {
    // Create a new list item (task)
    let item = document.createElement("li");
    item.innerText = inPut.value;  // Set the text to whatever user typed
    ul.appendChild(item);          // Add the new <li> to the <ul>
    inPut.value = "";              // Clear the input field after adding

    // Create a delete button for this task
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";   // Button text
    delBtn.classList.add("delete"); // Add a class for styling/identification
    item.appendChild(delBtn);       // Attach delete button to the task
});

// Event Delegation: Attach one listener to <ul> instead of each button
ul.addEventListener("click", function(event) {
    // Check if the clicked element is a BUTTON
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement; // Get the parent <li>
        listItem.remove(); // Remove the entire task (li + button)
    }
});


// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }