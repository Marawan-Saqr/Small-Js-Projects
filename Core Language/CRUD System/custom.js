// Welcome Message
function welcomeMessage() {
  alert("Welcome To The System");
}
welcomeMessage();
alert("Please Enter Function You Want Anything else these 4 Will Result In Programme Error");


// Data Of System
const systemData = [
  {id: 123456, userName: "Marawan Mahmoud Nasr", job: "Front-End Developer"},
  {id: 478734, userName: "Hossam Hamdy Mohmed", job: "Back-End Developer"},
  {id: 859483, userName: "Yassmina Ayman Ezzat", job: "UI/UX Developer"},
  {id: 853522, userName: "Osama Mohmed Elzero", job: "Full-Stack Developer"},
]


// Get Users Data Function
function getData(obj) {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
  }
}


// Create New User Function
function createUser(userName, job) {
  const obj = {
    id: Math.random(),
    userName: userName,
    job: job
  }

  console.log(obj);
}


// Delete User Data
function deleteUser(id) {
  const user = systemData.filter((element)=> element.id !== id);
  console.log(user);
}



// Update User Data
function updateUser(id, updatedData) {
  const userIndex = systemData.findIndex((element) => element.id === Number(id));
  if (userIndex !== -1) {
    systemData[userIndex] = { ...systemData[userIndex], ...updatedData };
    console.log("User updated:", systemData[userIndex]);
  } else {
    console.log("User not found!");
  }
}


// Choices Function
function checkUserInput(check) {
  if (check === "1") {
    getData(systemData);
  } else if (check === "2") {
    let name = prompt("Enter User Name");
    let job = prompt("Enter User Job");
    createUser(name, job);
  } else if (check === "3") {
    let numberDelete = prompt("Please Enter Id You Want To Delete");
    deleteUser(numberDelete);
  } else if (check === "4") {
    let numberNeeded = prompt("Please Enter Id You Want To Update");
    let newName = prompt("Please Enter New Name");
    let newJob = prompt("Please Enter New Job");
    updateUser(numberNeeded, {userName: newName, job: newJob});
  } else {
    alert("Invalid Choice Please Try Again");
  }
}

// Operations
while (true) {
  let functionality = prompt("1-List All Users\n 2-Create New User\n 3-Delete User\n 4-Update User\n Type Exit To Close The Programme");

  if (functionality === "Exit") {
    alert("Exiting the system. Goodbye!");
    break;
  }

  checkUserInput(functionality);
}