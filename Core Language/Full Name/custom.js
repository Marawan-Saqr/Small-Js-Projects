// Welcome Message Function
function welcomeMessage() {
  alert("Welcome To Our System");
  alert("You Will Be Asken To Enter First Name And Last Name ok?")
}
welcomeMessage();


// Validate User Name
function validateUserName(first, last) {
  if (first === null || last === null || first.trim() === "" || last.trim() === "") {
    return false;
  }
  return true;
}


// Get Full Name
function getFullName(first, last) {
  let fullName = "";
  fullName = first + " " + last;
  return fullName;
}


// Loop To Repeat Or Out
let fullName = "";
while(true) {


  while(true) {

    let firstName = prompt("Enter Your First Name");
    let lastName = prompt("Enter Your Last Name");

    let validName = validateUserName(firstName, lastName);
  
    if (validName) {
      fullName = getFullName(firstName, lastName);
      break;
    } else {
      alert("Please Enter Valid Name");
    }
  }

  alert(`Welcome ${fullName}`);
  let addAgain = confirm("Do You Want To Try Another Name?");
  if (!addAgain) {
    break;
  }


}

console.log(fullName);