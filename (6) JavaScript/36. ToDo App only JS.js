// ToDo App (only JavaScript)

let todo = [];

const prompt = require('prompt-sync')();
let request = prompt("Please enter your request");

while (true) {
    if (request == "quit") {
        console.log("Quitting app");
        break;
    }

    if (request == "list") {
      console.log("------------");
      for (let i = 0; i <todo.length; i++) {
        console.log(i, todo[i]);
      }
      console.log("------------");
    } else if (request == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } else if (request == "delete") {
        let index = prompt("Please enter the task index");
        todo.splice(index, 1);
        console.log("Task deleted")
    } else {
        console.log("Invalid request")
    }
    request = prompt("Please enter your request");
}