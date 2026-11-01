function updateClock() {
    // Retrieve Date and Time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Set AM/PM Session
    let session = "AM";
    if (hours >= 12) {
        session = "PM";
    }

    // Convert 24-hour time to 12-hour format
    if (hours === 0) {
        hours = 12; // Midnight
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Apply Formatting Logic: Leading Zeros
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Create the final time string
    let timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get readable calendar date
    let dateString = now.toLocaleDateString();

    // Update the DOM
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Initialize the Interval to run every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Run the function immediately once so there is no 1-second delay on page load
updateClock();