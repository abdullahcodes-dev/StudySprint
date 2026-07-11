const taskInput = document.querySelector("input");

const addTaskButton = document.querySelector("button");

const taskList = document.querySelector("ul");

const progressText = document.querySelector("#progress-text");

const progressBar = document.querySelector("#progress-bar");

function updateProgress() {
    const totalTasks = taskList.children.length;

    const completedTasks = document.querySelectorAll(".completed").length;

    progressText.textContent = `${completedTasks} / ${totalTasks} Tasks Completed`;

    progressBar.max = totalTasks;

    progressBar.value = completedTasks;
}

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

        updateProgress();
    })

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        newTask.remove();

        updateProgress();
    })

    newTask.prepend(checkbox);

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";

    updateProgress();

})