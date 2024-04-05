/*Nofifacion*/
document.getElementById("showNotificationButton").addEventListener("click", function(event) {
  let notification = document.getElementById("customNotification");

  // Toggle visibility
  if (notification.style.display === "none") {
    notification.style.display = "block";

    // Position the notification near the button
    let buttonRect = event.target.getBoundingClientRect();
    notification.style.left = buttonRect.left + "px"; // Align with the button's left
    notification.style.top = (buttonRect.bottom + 5) + "px"; // Slightly below the button
  } else {
    notification.style.display = "none";
  }
});

/*Picture on the main page*/
document.getElementById("profileImage").addEventListener("mouseenter", function() {
  document.getElementById("hoverText").style.display = "block";
});

document.getElementById("profileImage").addEventListener("mouseleave", function() {
  document.getElementById("hoverText").style.display = "none";
});

/* color schmemes*/
const colorSchemes = [
  { backgroundColor: '#D2B48C', textColor: '#000' }, // Original Scheme
  { backgroundColor: '#FFF', textColor: '#333' },    // Light Theme
  { backgroundColor: '#333', textColor: '#FFF' }     // Dark Theme
];

let currentSchemeIndex = 0; // Start with the first scheme

document.getElementById("nextScheme").addEventListener("click", function() {
    // Increment the index, wrapping around to 0 if it exceeds the array length
    currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
    updateColorScheme();
});

document.getElementById("prevScheme").addEventListener("click", function() {
    // Decrement the index, wrapping around to the last item if it goes below 0
    currentSchemeIndex = (currentSchemeIndex - 1 + colorSchemes.length) % colorSchemes.length;
    updateColorScheme();
});

function updateColorScheme() {
    // Apply the current color scheme to the body
    document.body.style.backgroundColor = colorSchemes[currentSchemeIndex].backgroundColor;
    document.body.style.color = colorSchemes[currentSchemeIndex].textColor;
}

/*Form*/
document.getElementById('feedbackButton').addEventListener('click', function() {
  let formContainer = document.getElementById('feedbackFormContainer');
  
  if (formContainer.style.display === "none") {
      formContainer.style.display = "block"; // Show the form
  } else {
      formContainer.style.display = "none"; // Hide the form
  }
});

