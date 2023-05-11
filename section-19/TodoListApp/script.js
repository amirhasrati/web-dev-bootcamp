/* Todo List App */

let userInput = prompt("What would you like to do?");
const todos = [];
let todo;

while (userInput !== "quit") {
    if (userInput === "new") {
        todo = prompt("Enter a new todo:");
        todos.push(todo);
        console.log(`${todo} added to list`);
    } else if (userInput === "list") {
        console.log("***********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********");
    } else if (userInput === "delete") {
        todos.splice(parseInt(prompt("Enter index of todo to delete")), 1);
        console.log("Todo Removed");

    } else {
        console.log("Please enter a valid command.");
    }

    userInput = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");