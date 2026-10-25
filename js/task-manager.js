// Global array to track tasks as objects
let myTasks = [];
let taskIdCounter = 1;

// --- Existing Weekly Goal Function ---
function weeklyGoal(userName, dailyGoal, bonusTasks) {
  let weeklyBase = dailyGoal * 5;
  let totalGoal = weeklyBase + bonusTasks;
  let output = "User: " + userName + "<br>Total Weekly Goal: " + totalGoal;
  document.getElementById("goal-message").innerHTML = output;
}

// --- Task Manager Core Functions ---

// Requirement: Log task updates to the console
function logTasks() {
  console.log(JSON.stringify(myTasks));
}

// Requirement: Render tasks dynamically with conditional styling
function renderTasks() {
  let userTasksUl = document.getElementById("user-tasks");
  userTasksUl.innerHTML = ""; // Clear existing list to prevent duplication

  myTasks.forEach(task => {
    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
    li.textContent = `${task.name} [${task.priority}]`;

    // Visual Styles via JavaScript .style property
    if (task.priority === "High") li.style.borderLeft = "5px solid darkred";
    if (task.priority === "Medium") li.style.borderLeft = "5px solid darkorange";
    if (task.priority === "Low") li.style.borderLeft = "5px solid green";

    if (task.isImportant) {
      li.style.color = "red";
      li.style.fontWeight = "bold";
    }

    if (task.isCompleted) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.6";
    }

    // Button Container
    const btnGroup = document.createElement("div");

    // Complete Task Button (DOM Node)
    const completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-sm btn-success me-2";
    completeBtn.textContent = task.isCompleted ? "Undo" : "Complete";
    completeBtn.onclick = function() {
      markTaskComplete(task.id);
    };

    // Delete Individual Task Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-outline-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      deleteSingleTask(task.id);
    };

    // Append elements to DOM
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);
    userTasksUl.appendChild(li);
  });
}

// Requirement: Function to add tasks
function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task-name");
  const priorityInput = document.getElementById("task-priority");
  const importantInput = document.getElementById("task-important");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task name.");
    return;
  }

  // Create task object matching the required structure
  const newTask = {
    id: taskIdCounter++,
    name: taskText,
    priority: priorityInput.value,
    isImportant: importantInput.checked,
    isCompleted: false
  };

  myTasks.push(newTask);
  logTasks();
  renderTasks();

  // Reset form UI
  taskInput.value = "";
  priorityInput.value = "Medium";
  importantInput.checked = false;
  taskInput.focus();
}

// Requirement: Function to mark task complete
function markTaskComplete(taskId) {
  const taskIndex = myTasks.findIndex(t => t.id === taskId);
  if (taskIndex > -1) {
    myTasks[taskIndex].isCompleted = !myTasks[taskIndex].isCompleted;
    logTasks();
    renderTasks();
  }
}

// Requirement: Function to delete a specific task dynamically
function deleteSingleTask(taskId) {
  myTasks = myTasks.filter(t => t.id !== taskId);
  logTasks();
  renderTasks();
}

// Requirement: Function to delete the entire task list
function deleteTaskList() {
  myTasks = [];
  logTasks();
  renderTasks();
}

// --- Initialize Event Listeners on DOM Load ---
document.addEventListener("DOMContentLoaded", function () {
  
  // Weekly Goals Setup
  const goalBtn = document.getElementById("goal-btn");
  if (goalBtn) {
    goalBtn.addEventListener("click", function (event) {
      event.preventDefault();
      let userName = document.getElementById("userName").value;
      let dailyGoal = Number(document.getElementById("dailyGoal").value);
      let bonusTasks = Number(document.getElementById("bonusTasks").value);
      weeklyGoal(userName, dailyGoal, bonusTasks);
    });
  }

  // Task Manager Setup
  const taskListContainer = document.getElementById("task-list");
  let userTasksUl = document.getElementById("user-tasks");

  if (taskListContainer && !userTasksUl) {
    userTasksUl = document.createElement("ul");
    userTasksUl.id = "user-tasks";
    userTasksUl.className = "list-group mt-3";
    taskListContainer.appendChild(userTasksUl);
  }

  // Bind Buttons
  const addTaskBtn = document.getElementById("add-task");
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", addTask);
  }

  const deleteListBtn = document.getElementById("delete-list");
  if (deleteListBtn) {
    deleteListBtn.addEventListener("click", deleteTaskList);
  }
});