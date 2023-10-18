document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Event listener for adding a task
  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  // Event listener for removing a task
  taskList.addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
    }
  });

  // Function to add a task to the list
  function addTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
          ${taskText}
          <button>Delete</button>
      `;
    taskList.appendChild(li);
  }
});
