// ----------------------------------------------------------FAQs List Click Function---------------------------------------------------------------

// Get all Accordion and Panel
let accHeading = document.querySelectorAll(".question");
let accPanel = document.querySelectorAll(".answer");

for (let i = 0; i < accHeading.length; i++) {
  // Execute whenever an accordion is clicked 
  accHeading[i].onclick = function () {
    if (this.nextElementSibling.style.maxHeight) {
      hidePanels();     // Hide All open Panels 
    } else {
      showPanel(this);  // Show the panel
    }
  };
}

// Function to Show a Panel
function showPanel(element) {
  hidePanels();
  element.classList.add("active");
  element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    accHeading[i].classList.remove("active");
  }
}


// ----------------------------------------------------------OnSubmit Function---------------------------------------------------------------

document.querySelector('.email-signup').addEventListener('submit', function (event) {
  event.preventDefault();
  window.location.href = 'https://www.netflix.com/login';
});
