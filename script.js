const taskInput = document.querySelector("input");

const addTaskButton = document.querySelector("button");

const taskList = document.querySelector("ul");


addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();

    const task = taskInput.value;

    if (task.trim() === "") {
        return;
    }

    const newTask = document.createElement("li");

    newTask.textContent = task;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        newTask.remove();
    })

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";

})