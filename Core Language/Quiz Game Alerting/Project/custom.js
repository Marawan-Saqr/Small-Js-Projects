// Start Of Programme
alert("Welcome to the Math Quiz Game!");


// Validate User Answer
function validateUserAnswer(userAnswer, correctAnswer) {

  return !isNaN(userAnswer) && userAnswer.trim() !== "" && Number(userAnswer) === correctAnswer;

}


// Questions Function
function questions() {

  let points = 0;

  let one = prompt(`Question 1: What is 5 + 3?`);
  let answerOne = validateUserAnswer(one, 8);
  if (answerOne === true) {
    points++;
  }


  let two = prompt(`Question 2: What is 10 - 4?`);
  let answerTwo = validateUserAnswer(two, 6);
  if (answerTwo === true) {
    points++;
  }


  let three = prompt(`Question 3: What is 7 * 4?`);
  let answerThree = validateUserAnswer(three, 28);
  if (answerThree === true) {
    points++;
  }


  let four = prompt(`Question 4: What is 8 / 4?`);
  let answerFour = validateUserAnswer(four, 2);
  if (answerFour === true) {
    points++;
  }


  alert(`You Answer ${points} from 4`);


}

// Call Function
questions();