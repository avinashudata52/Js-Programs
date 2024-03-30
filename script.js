// script.js

// Function to change the name dynamically
function changeName() {
    // Access the span element by its ID
    var nameSpan = document.getElementById("name");
  
    // Prompt the user for a new name
    var newName = prompt("Enter your name:");
  
    // Update the content of the span elementn
    if (newName) {
      nameSpan.textContent = newName;
    }
  }
  
  // Attach an event listener to the button
  document.getElementById("changeNameBtn").addEventListener("click", changeName);
  