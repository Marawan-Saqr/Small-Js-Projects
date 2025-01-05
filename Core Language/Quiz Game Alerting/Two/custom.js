// Game Start Function
function gameStart() {
  alert("Hello To Quiz Game You Will Answer Four Questions And Get Result");
}
gameStart();

// Validate User Input
function validateUserInput(userInput) {
  if (!isNaN(userInput) && userInput.trim() !== "") {
    let userNumber = Number(userInput);
    return userNumber;
  } else {
    alert("Wrong Enter Valid Value");
    return null;
  }
}


// Game Questions Function
function gameQuestions() {

  let points = 0;

  let questionOne = prompt("What Is Value Of 5 + 5 ?");
  let checkfirtNumber = validateUserInput(questionOne);
  if (checkfirtNumber === 10) {
    points++;
  }

  let questionTwo = prompt("What Is Value Of 3 + 5 ?");
  let checkSecondNumber = validateUserInput(questionTwo);
  if (checkSecondNumber === 8) {
    points++;
  }

  let questionThree = prompt("What Is Value Of 2 + 5 ?");
  let checkThirdNumber = validateUserInput(questionThree);
  if (checkThirdNumber === 7) {
    points++;
  }

  let questionFour = prompt("What Is Value Of 1 + 5 ?");
  let checkFourQuestion = validateUserInput(questionFour);
  if (checkFourQuestion === 6) {
    points++;
  }

  alert(`You Answer ${points} from 4`);

}


// Game Repeat Part
let playAgain = true;
while (playAgain) {
  gameQuestions();
  playAgain = confirm("Would you like to play again? Click 'OK' to play again or 'Cancel' to exit.");
}

alert("Thank you for playing! See you next time!");