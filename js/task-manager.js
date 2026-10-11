// Step 3.3: Declare a global array to track tasks
let myTasks = [];

// Function to calculate weekly targets and display results in the DOM
function weeklyGoal(userName, dailyGoal, bonusTasks) {
  // Multiply dailyGoal by 5 standard workdays
  let weeklyBase = dailyGoal * 5;

  // Add bonusTasks to weeklyBase
  let totalGoal = weeklyBase + bonusTasks;

  // Format output string
  let output = "User: " + userName + "<br>Total Weekly Goal: " + totalGoal;

  // Target the goal-message element and assign the result
  document.getElementById("goal-message").innerHTML = output;
}

// Ensure DOM elements are fully loaded before attaching listeners and creating elements
document.addEventListener("DOMContentLoaded", function () {
  // --- Weekly Task Goal Calculator ---
  const goalBtn = document.getElementById("goal-btn");

  if (goalBtn) {
    goalBtn.addEventListener("click", function (event) {
      // Prevent default form submission so the message persists
      event.preventDefault();

      // Retrieve input values and cast numbers
      let userName = document.getElementById("userName").value;
      let dailyGoal = Number(document.getElementById("dailyGoal").value);
      let bonusTasks = Number(document.getElementById("bonusTasks").value);

      // Call the calculation function
      weeklyGoal(userName, dailyGoal, bonusTasks);
    });
  }

  // --- Step 3.1 & 3.2: Create and Append Dynamic UL ---
  const taskListContainer = document.getElementById("task-list");
  let userTasksUl = document.getElementById("user-tasks");

  if (taskListContainer && !userTasksUl) {
    // 1. Create the unordered list element
    userTasksUl = document.createElement("ul");
    // 2. Assign unique ID and Bootstrap styling
    userTasksUl.id = "user-tasks";
    userTasksUl.className = "list-group mt-3";
    // 3. Append to the #task-list container div
    taskListContainer.appendChild(userTasksUl);
  }

  // --- Step 3.5: Add Task Event Handling ---
  const addTaskBtn = document.getElementById("add-task");
  const taskInput = document.getElementById("task-name");

  if (addTaskBtn && taskInput) {
    addTaskBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const taskText = taskInput.value.trim();

      // Basic validation check
      if (taskText === "") {
        alert("Please enter a task name.");
        return;
      }

      // Step 3.5.1: Capture and store in global array using .push()
      myTasks.push(taskText);

      // Step 3.5.2: Create list item element
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = taskText;

      // Step 3.5.3: Append <li> to the dynamically created <ul>
      userTasksUl.appendChild(li);

      // Reset input field and refocus
      taskInput.value = "";
      taskInput.focus();
    });
  }
});