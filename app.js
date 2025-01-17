// Selectors
const todoInput = document.querySelector('.todo-input'); // Input field for user to enter a task
const todoButton = document.querySelector('.todo-button'); // Button to add a task
const todoList = document.querySelector('.todo-list'); // Container (ul) for the list of tasks
const filterOption = document.querySelector('.fliter-todo');

// Event Listeners
todoButton.addEventListener("click", addTodo); // Adds a task when the button is clicked
todoList.addEventListener("click", deleteCheck); // Handles delete and complete actions for tasks
filterOption.addEventListener("click", filterTodo);

// Functions

// Function to add a new task
function addTodo(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the input field is empty
    if (!todoInput.value.trim()) {
        alert('Please enter something in the input field.'); // Alert user if input is empty
    } else {
        // Creating a container div for the todo item
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo'); // Add class for styling

        // Creating the todo item (li element)
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item'); // Add class for styling
        newTodo.innerText = todoInput.value; // Set the text from the input field

        // Append the todo item (li) to the container div
        todoDiv.appendChild(newTodo);

        // Creating the "Check Mark" button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'; // Add check icon
        completedButton.classList.add("complete-btn"); // Add class for styling
        todoDiv.appendChild(completedButton); // Append button to the container

        // Creating the "Trash" button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // Add trash icon
        trashButton.classList.add("trash-btn"); // Add class for styling
        todoDiv.appendChild(trashButton); // Append button to the container

        // Append the todo container to the todo list (ul)
        todoList.appendChild(todoDiv);

        // Clear the input field
        todoInput.value = "";
    }
}

// Function to handle delete and complete actions
function deleteCheck(event) {
    const item = event.target; // Get the clicked element

    // If the clicked element is the "Trash" button
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement; // Get the parent container (todo div)
        todo.classList.add('animate'); // Add animation class for transition
        // Wait for the transition to end before removing the item
        todo.addEventListener('transitionend', function() {
            todo.remove(); // Remove the todo item
        });
    }

    // If the clicked element is the "Complete" button
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement; // Get the parent container (todo div)
        todo.classList.toggle('complete'); // Toggle the "complete" class for styling
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
            todo.style.display ="flex";
            break;

            case "completed":
            if(todo.classList.contains('complete')){
                todo.style.display ="flex";
            } else {
                todo.style.display = "none";
            }
            break;

            case "uncompleted":
                if(!todo.classList.contains('complete')){
                    todo.style.display ="flex";
                }else{
                    todo.style.display ="none";
                }

        }
    })
   
}
