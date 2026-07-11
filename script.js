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

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        newTask.classList.toggle("completed");
    })

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        newTask.remove();
    })

    newTask.prepend(checkbox);

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";

})