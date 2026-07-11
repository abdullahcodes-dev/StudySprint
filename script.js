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

function updateProgress() {
    const totalTasks = taskList.children.length;

    const completedTasks = document.querySelectorAll(".completed").length;

    progressText.textContent = `${completedTasks} / ${totalTasks} Tasks Completed`;

    progressBar.max = totalTasks;

    progressBar.value = completedTasks;
}

function createTask(task) {
    const newTask = document.createElement("li");

    newTask.textContent = task.text;

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.checked = task.completed;

    if (task.completed) {
        newTask.classList.add("completed");
    }

    checkbox.addEventListener("change", function() {
        newTask.classList.toggle("completed");

        task.completed = checkbox.checked;

        localStorage.setItem("tasks", JSON.stringify(tasks));

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

    const newTask = {
        text: task,
        completed: false
    }

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(newTask);

    taskInput.value = "";
})