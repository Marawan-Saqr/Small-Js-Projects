// Function Welcome
function welcomeMessage() {
  alert("Welcome To Student Managment");
}
welcomeMessage();


// Function User Input
function userInput() {

  let studentName = prompt("Enter Student Name");
  let studentAge = prompt("Enter Student Age");
  let studentGPA = prompt("Enter Student GPA");


  const studentObj = {
    id: Math.random(),
    name: studentName,
    age: studentAge,
    grade: studentGPA
  }

  return studentObj;

}


// Function Validate User Input
function validateUserInput(obj) {

  const validGrades = ['A', 'B', 'C', 'D', 'F'];
  if (
    typeof obj.name === "string" && obj.name.trim() !== "" && !isNaN(obj.age) && obj.age > 0 && Number.isInteger(Number(obj.age)) && validGrades.includes(obj.grade)) {
    return true;
  } else {
    return false;
  }

}



// Push Students To Array
function arrayOfStudents(studentObj, array) {

  array.push(studentObj);
  return array;

}


let result = [];
function operationRepeat() {

  while (true) {
    let userData = userInput();
    let validateData = validateUserInput(userData);
    if (validateData) {
      result = arrayOfStudents(userData, result);
    } else {
      alert("Enter A Valid Data");
      continue;
    }

    let addAgain = confirm("Do You Want To Add Another Student ?");
    if (!addAgain) {
      break;
    }
  }

  return result;

}


let finalResult = operationRepeat();
console.log(finalResult);