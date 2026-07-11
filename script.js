const taskInput = document.querySelector("input");

const addTaskButton = document.querySelector("button");

const taskList = document.querySelector("ul");

const progressText = document.querySelector("#progress-text");

const progressBar = document.querySelector("#progress-bar");

let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

for (const task of tasks) {
    createTask(task);
}

console.log(tasks);

function updateProgress() {
    const totalTasks = taskList.children.length;

    const completedTasks = document.querySelectorAll(".completed").length;

    progressText.textContent = `${completedTasks} / ${totalTasks} Tasks Completed`;

    progressBar.max = totalTasks;

    progressBar.value = completedTasks;
}

function createTask(task) {
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

        tasks = tasks.filter(function(currentTask) {
            return currentTask !== task; 
        }); 

        localStorage.setItem("tasks", JSON.stringify(tasks));

        updateProgress();
    })

    newTask.prepend(checkbox);

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    updateProgress();

}

addTaskButton.addEventListener("click", function(event) {
    event.preventDefault();

    const task = taskInput.value;

    if (task.trim() === "") {
        return;
    }

    tasks.push(task);

    console.log(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(task);

    taskInput.value = "";
})