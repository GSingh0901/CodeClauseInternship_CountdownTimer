var nameInput = document.getElementById("name");
var dateInput = document.getElementById("date");
var timeInput = document.getElementById("time");
var startButton = document.getElementById("start");

// Get the timer elements
var timer = document.getElementById("timer");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");

// Hide the timer initially
timer.style.display = "none";

// Define a variable to store the countdown interval
var countdown;

// Add a click event listener to the start button
startButton.addEventListener("click", function() {
  // Get the name, date, and time of the event from the input values
  var name = nameInput.value;
  var date = dateInput.value;
  var time = timeInput.value;

  // Validate the input values
  if (name == "" || date == "" || time == "") {
    // If any of the input values is empty, alert the user
    alert("Please enter the name, date, and time of your event");
  } else {
    // If the input values are valid, create a new date object from them
    var eventDate = new Date(date + " " + time);

    // Clear any existing countdown interval
    clearInterval(countdown);

    // Start the countdown function
    countdown = setInterval(function() {
      // Get the current date and time
      var now = new Date();

      // Calculate the difference between the event date and the current date in milliseconds
      var difference = eventDate - now;

      // Calculate the remaining days, hours, minutes, and seconds
      var remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Display the remaining days, hours, minutes, and seconds
      days.innerHTML = remainingDays;
      hours.innerHTML = remainingHours;
      minutes.innerHTML = remainingMinutes;
      seconds.innerHTML = remainingSeconds;

      // Show the timer
      timer.style.display = "flex";

      // If the difference is less than or equal to zero
      if (difference <= 0) {
        // Clear the countdown interval
        clearInterval(countdown);

        // Hide the timer
        timer.style.display = "none";

        // Display a message
        message.innerHTML = "The event " + name + " has started!";

        // Add a bounce animation to the message
        message.style.animation = "bounce 1s infinite";
      }
    }, 1000);
  }
});
