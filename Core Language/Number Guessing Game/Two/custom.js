// Game Introduction
function gameIntroduction() {
  alert("Welcome To Number Guessing Game");
  alert("You Will Choose a Number From 1 to 10 And You Have 3 Lives");
}
gameIntroduction();


// User Input Function
function userInput() {
  let userInput = prompt("Enter Number From 1 To 10");
  return userInput;
}


// Validate User Input
function validateUserInput(input) {
  if (!isNaN(input) && input.trim() !== "" && input > 0 && input <= 10) {
    let numberUserInput = Number(input);
    return numberUserInput;
  } else {
    alert("Error: Enter a valid input between 1 and 10");
    return null;
  }
}


// Check User Number If Right
function checkUserNumber(userNumber) {
  let guessedNumber = 4;
  if (userNumber === guessedNumber) {
    alert("Perfect You Got It");
    alert(`The Guessed Number Is ${guessedNumber}`);
    return true;
  } else {
    alert("Wrong Try Again");
    return false;
  }
}

// Game Repeat Function
function gameRepeat() {

  let lifes = 3;

  while(lifes > 0) {
    let userGuess = userInput();
    let validGuess = validateUserInput(userGuess);
    if (validGuess !== null) {
      let correct = checkUserNumber(validGuess);
      if (correct) {
        break;
      } else {
        lifes--;
        alert(`You have ${lifes} lives left`);
      }
    }
    if (lifes === 0) {
      alert("You Lost All Lives. Try Again!");
      let playAgain = confirm("Want To Try Again?");
      if (playAgain) {
        gameRepeat();
      } else {
        break;
      }
    }
  }
}

gameRepeat();