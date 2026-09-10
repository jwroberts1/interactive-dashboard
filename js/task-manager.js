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

// Event handler setup
const goalBtn = document.getElementById("goal-btn");

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