// Welcome Message Function
function welcomeMessage() {
  alert("Welcome To Our Bank System");
  alert("Insert Your Data To Continue");
}
welcomeMessage();



// User Details Input Function
function userDetailsInput(firstName, lastName, userAge, userAddress) {

  const obj = {
    id: Math.random(),
    fname: firstName,
    lname: lastName,
    age: userAge,
    address: userAddress
  }

  return obj;

}


// User Details Input Validate Function
function userDetailsValidate(detailsObj) {

  let firstNameValid = detailsObj.fname.trim() !== "";
  let lastNameValid = detailsObj.lname.trim() !== "";
  let isAgeValid = !isNaN(detailsObj.age);
  let addressValid = detailsObj.address;

  return firstNameValid && lastNameValid && isAgeValid && addressValid;

}


// Display User Data Function
function displayUserData(detailsObj) {

  return `Welcome ${detailsObj.fname} ${detailsObj.lname} Your Age Is ${detailsObj.age} And Address Is ${detailsObj.address}`;

}


// Choose Tasks Function
function chooseTasks() {

  alert("Choose One Of The Tasks");
  let tasks = prompt("1-Add Money\n 2-Receive Money");
  switch (tasks) {
    case "1":
      return "You chose to add money.";
    case "2":
      return "You chose to receive money.";
    default:
      return "Invalid choice. Please try again.";
  }

}


let userDetails;
while(true) {
  let fname = prompt("Enter Your First Name");
  let lname = prompt("Enter Your Last Name");
  let age = prompt("Enter Your Age");
  let address = prompt("Enter Your Address");
  userDetails = userDetailsInput(fname, lname, age, address);

  let validateUser = userDetailsValidate(userDetails);
  if (validateUser) {
    alert(displayUserData(userDetails));
    break;
  } else {
    alert("Error Please Enter Valid Data");
  }
}



let tasks = chooseTasks();
alert(tasks);
alert("Thank You See You In Next Big Programme");