// Get Elements
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classesContainer = document.querySelector(".classes-list div");

// Style For classesContainer
classesContainer.style.display = "flex";
classesContainer.style.alignItems = "center";
classesContainer.style.justifyContent = "center";
classesContainer.style.flexWrap = "wrap";


// addInput Eventlistener
addInput.addEventListener("blur", function(e) {

  value = e.target.value.toLowerCase().split(" ");

  if (value === "") {
    alert("You Must Enter Data");
  } else {
    currentElement.classList.add(value);
    let span = document.createElement("span");
    span.classList.add("special-span");
    span.textContent = value;
    classesContainer.appendChild(span);
    checkText();
  }

  e.target.value = "";

})

// removeInput Eventlistener
removeInput.addEventListener("blur", function(e) {

  let value = e.target.value.toLowerCase();

  if (value === "") {
    alert("You Must Enter Data");
  } else {
    currentElement.classList.remove(value);
    let spans = document.querySelectorAll(".classes-list div .special-span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent === value) {
        spans[i].remove();
      }
    }
    checkText();
  }

  e.target.value = "";

})

// Create Div Inside classesContainer
let textCheck = document.createElement("div");
textCheck.textContent = "No Classes To Show";
classesContainer.appendChild(textCheck);

function checkText() {
  let spans = classesContainer.querySelectorAll(".special-span");
  if (spans.length === 0) {
    textCheck.textContent = "No Classes To Show";
  } else {
    textCheck.textContent = "";
  }
}