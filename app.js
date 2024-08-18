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
        taskDiv.remove(); 
    };

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todoInput.value;

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

    todoInput.value = "";
}
