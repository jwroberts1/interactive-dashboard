// Step 1: Define an array of at least 6 possible answers
var answers = [
  "It is certain",
  "Reply hazy, try again",
  "Don't count on it",
  "It is decidedly so",
  "Ask again later",
  "My sources say no",
  "Outlook good",
  "Very doubtful"
];

// Step 2: Implement displayAnswer() function
function displayAnswer() {
  var index = Math.floor(Math.random() * answers.length);
  var circle = document.getElementById("circle");

  if (circle) {
    circle.style.display = "block";
    circle.innerHTML = answers[index];
  }
}

// Step 3: Event listeners
document.addEventListener("DOMContentLoaded", function () {
  var ball = document.getElementById("ball");
  var magicContainer = document.getElementById("magicEightBall");
  var resetBtn = document.getElementById("reset");

  function handleBallClick(event) {
    // Prevent default form submission or drag behaviors
    if (event) event.preventDefault();

    var questionField = document.getElementById("question");
    var questionText = questionField ? questionField.value.trim() : "";

    if (questionText === "") {
      alert("Please type a question before asking the Magic Eight Ball!");
    } else {
      displayAnswer();
    }
  }

  // Attach to the image AND the parent container in case #circle overlays #ball
  if (ball) {
    ball.addEventListener("mousedown", handleBallClick);
  }
  if (magicContainer) {
    magicContainer.addEventListener("mousedown", handleBallClick);
  }

  // Reset button clears the answer
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      var circle = document.getElementById("circle");
      if (circle) {
        circle.style.display = "none";
        circle.innerHTML = "";
      }
    });
  }
});