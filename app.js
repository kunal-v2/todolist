function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const taskList = document.getElementById("taskList");

    if (todoInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.onclick = function () {
        setTimeout(function () {
            taskDiv.remove();
        }, 500); 
    };

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todoInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        setTimeout(function () {
            taskDiv.remove();
        }, 500); 
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    todoInput.value = "";
}


document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.onclick = function () {
        setTimeout(function () {
            taskDiv.remove();
        }, 500);
    };

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = "100$ Bounty is Presented to @100Xkunal ";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        setTimeout(function () {
            taskDiv.remove();
        }, 500); 
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);
});
