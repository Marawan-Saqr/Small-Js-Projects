// Get Elements
let inputUser = document.querySelector("input[type='number']");
let changes = document.querySelector(".result");

// Add addEventListener To inputUser
inputUser.addEventListener("input", convertCoin);

// Function convertCoin
function convertCoin() {
  if (inputUser.value < 0) {
    changes.textContent = `Error Value`;
  } else {
    let egpValue = 47.93;
    let convertedValue = inputUser.value * egpValue;
    changes.textContent = `${inputUser.value} USD Dollar = ${convertedValue.toFixed(2)} Egyptian Pound`;
  }
}