document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");

    // Create pre-existing task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.onclick = function () {
        taskDiv.remove();
    };

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = "100$ bounty is presented to 100xKunal ";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskDiv.remove();
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);
});
