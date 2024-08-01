// Get Elements
let numOfElementsInput = document.querySelector("input[type='number']");
let elementsText = document.querySelector("input[type='text']");
let selectType = document.querySelector("select");
let btnSubmit = document.querySelector("input[type='submit']");
let insertHere = document.querySelector(".insert-here");

// Create Parent Div
let container = document.createElement("div");
container.classList.add("container");
insertHere.appendChild(container);

// Function On btnSubmit
btnSubmit.addEventListener("click", generate);

// Function generate
function generate(e) {

  e.preventDefault();

  // Clear the container before adding new elements
  container.innerHTML = '';

  let numOfElementsInputConverted = parseInt(numOfElementsInput.value);

  for (let i = 0; i < numOfElementsInputConverted; i++) {
    if (selectType.value === "div") {
      let smallDiv = document.createElement("div");
      smallDiv.classList.add("special-div");
      smallDiv.textContent = elementsText.value;
      smallDiv.setAttribute("id", `id-${i + 1}`);
      container.appendChild(smallDiv);
    } else {
      let smallDiv = document.createElement("section");
      smallDiv.classList.add("special-div");
      smallDiv.textContent = elementsText.value;
      smallDiv.setAttribute("id", `id-${i + 1}`);
      container.appendChild(smallDiv);
    }

  }
}