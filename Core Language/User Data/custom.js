// Hello Message Function
function systemMessage() {
  alert("Welcome To Our System");
}
systemMessage();


// User Input Function
function userInput(userName, userAge, userJob) {

  const obj = {
    id: Math.random(),
    name: userName,
    age: userAge,
    job: userJob
  }

  return obj;

}


// Validate User Input
function validateUser(data) {

  if (data.name.trim() !== "" && !isNaN(data.age) && data.job.trim() !== "") {
    return true;
  } else {
    return false;
  }

}


// Push User To Array Function
function pushToArray(data, newArray) {

  newArray.push(data);
  return newArray;

}

// Add And Out
let result = [];
while(true) {

  let name = prompt("Please Enter User Name");
  let age = prompt("Please Enter User Age");
  let job = prompt("Please Enter User Job");
  let input = userInput(name, age, job);

  while(true) {
    let validate = validateUser(input);

    if (validate) {
      break;
    } else {
      alert("Data Is Not Valid Please Try Again Again");
    }
  }

  result = pushToArray(input, result);
  let addAgain = confirm("Do You Want To Try Another Operation?");
  if (!addAgain) {
    break;
  }

}


console.log(result);