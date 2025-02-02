// Welcome Message Function
function welcomeMessage() {
  alert("Welcome To Our System. You Need To Login Before Entering. If You Don't Have An Account, Please Register One.");
}
console.log(welcomeMessage());

// Choose Functionality
function chooseFunctionality() {
  let choose = prompt("1- Register User\n2- Login User\nType 'Exit' If You Want To Close The Program");
  return choose;
}

// Register Function
function registerAccount(user, password) {
  return {
    id: Math.random(),
    userName: user,
    userPassword: password
  };
}

// Push Registered User To Database
function dataBase(createdObj, arrayData) {
  arrayData.push(createdObj);
  return arrayData;
}

// Login User
function loginUser(user, password, arrayData) {
  let foundUser = arrayData.find(account => account.userName === user && account.userPassword === password);

  return foundUser ? true : false;
}

let data = [];
// Operations
while (true) {
  let choose = chooseFunctionality();

  if (choose === "1") {
    let userName = prompt("Please Create a Username:");
    let userPassword = prompt("Please Create a Password:");
    
    if (userName && userPassword) {
      let registerObj = registerAccount(userName, userPassword);
      alert("User Created Successfully!");
      data = dataBase(registerObj, data);
    } else {
      alert("Username and Password cannot be empty!");
    }

  } else if (choose === "2") {
    if (data.length === 0) {
      alert("No registered users found! Please register first.");
      continue;
    }

    let userName = prompt("Enter Username:");
    let userPassword = prompt("Enter Password:");
    let login = loginUser(userName, userPassword, data);

    if (login) {
      alert("Login Successfully!");
      break;
    } else {
      alert("Invalid Username or Password, Please Try Again.");
    }

  } else if (choose.toLowerCase() === "exit") {
    alert("Ok Goodbye! See You Next Time.");
    break;

  } else {
    alert("Invalid Choice! Please Try Again.");
  }
}

console.log(data);