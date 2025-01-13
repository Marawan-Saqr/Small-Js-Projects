// Take Name From User
function takeUserName() {
  let userName = prompt("What's Your Name?");
  return userName;
}


// Validate Username Of User
function validateUserName(user) {
  while (user === null || user.trim() === "") {
    alert("Invalid Name Or Has Spaces. Please Enter Your Name Again.");
    user = takeUserName();
  }
  return user;
}

// Your Data
let userName = takeUserName();
let validUserName = validateUserName(userName);


// Welcome Game Message
function welcomeMessage(validUserName) {
  alert(`Hello ${validUserName} Welcome To our Game`);
  alert("You Will Add Two Inputs To Sum Them");
}
let welcome = welcomeMessage(validUserName);



// Validate User Inputs
function validateInputs(value1, value2) {
  if (!isNaN(value1) && !isNaN(value2)) {
    return true;
  } else {
    return false;
  }
}

// Get Result Of Suming User Inputs
function getResult(numOne, numTwo) {
  let result = 0;
  result = numOne + numTwo;
  return result;
}



let result = 0;

while (true) {

  let numberOne, numberTwo;

  while (true) {

    numberOne = Number(prompt("Please Enter Number One"));
    numberTwo = Number(prompt("Please Enter Number Two"));

    let valid = validateInputs(numberOne, numberTwo);

    if (valid) {
      break;
    } else {
      alert("Numbers Are Not Valid. Please Try Again.");
    }
  }

  result = getResult(numberOne, numberTwo);
  alert(`Your Result Is ${result}`);
  let addAgain = confirm("Do You Want To Try Another Operation?");
  if (!addAgain) {
    break;
  }
}

console.log(result);