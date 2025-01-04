// Function To Generate Random Number
function guessingNumber() {
  let number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
  return number;
}

// User Guess Function
function userGuess() {
  let input = Number(prompt("Enter a number from 1 to 10"));
  if (isNaN(input) || input < 1 || input > 10) {
    alert("Please enter a valid number between 1 and 10.");
  }
  return input;
}

// Counts Of User
let tryCounts = 5;
let randomNumber = guessingNumber();

// User Tries Function
function userTries(guessUser, random, counts) {
  if (guessUser === random) {
    alert(`Good Work The Number Is ${random}`);
  } else {
    counts--;
    alert(`Incorrect! You have ${counts} tries left.`);
  }
  return counts;
}

while (tryCounts > 0) {
  let guess = userGuess();
  if (guess !== null) {
    tryCounts = userTries(guess, randomNumber, tryCounts);
  }
  if (guess === randomNumber) {
    break;
  }
  if (tryCounts === 0) {
    alert("Sorry, you've run out of tries. The correct number was " + randomNumber);
  }
}