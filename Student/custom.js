// Opening Of Programme
alert("Welcome To Student Record System");
let studentName = prompt("Enter Student Name");
let studentAge = prompt("Enter Student Age");
let studentGrade = prompt("Enter Student Grade");

// Add Student Data Function
function addStudentData(sname, sage, sgrade) {

  const studentObj = {
    id: Math.random(),
    name: sname,
    age: sage,
    grade: sgrade
  }

  return studentObj;

}
let create = addStudentData(studentName, studentAge, studentGrade);



// Add Student Data To Array Function
function addToArray(studentData) {

  let studentsArray = [];
  studentsArray.push(studentData);
  return studentsArray;

}
let studentsArray = addToArray(create);



// Display All Student
function displayStudents(allStudents) {
  console.log(allStudents);
}
let display = displayStudents(addToArray);
console.log(display);



// Update Student Data
function updateStudent(id, newStudentData) {
  
  for (let i = 0; i < studentsArray.length; i++) {
    if(studentsArray[i].id === id) {
      studentsArray[i] = {...studentsArray[i], ...newStudentData};
      console.log("Found");
      break;
    }
  }
}

// Example usage: updating student data
let studentIdToUpdate = create.id;  // The id of the student to update
let newStudentData = { name: "Updated Name", age: 21, grade: "A+" };  // New data to update
console.log(updateStudent(studentIdToUpdate, newStudentData));  // Updating student and showing the result

// Display all students after update
displayStudents(studentsArray);
