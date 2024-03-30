
// script.js

// Function to be executed when the button is clicked
function buttonClickHandler() {
    alert("Button clicked!");
  }
  
  // Get a reference to the button element by its ID
  var myButton = document.getElementById("myButton");
  
  // Attach an event listener to the button, listening for the 'click' event
  myButton.addEventListener("click", buttonClickHandler);
  