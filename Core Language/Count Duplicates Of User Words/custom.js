// Welcome Message Function
function helloMessage() {
  alert(
    "Welcome! This game is about entering sentences and the program will output the duplicate words. To start, please enter your name."
  );
}


// Validate Username
function validateUserName(valideUser) {
  if (valideUser.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

// Username Function
function nameUserInput(userName) {
  alert(`Hello ${userName}`);
}

// Operations On Username Input
helloMessage();
let userName = "";
let userInput = "";

while (true) {

  userName = prompt("Please Enter Your Name?");
  let valid = validateUserName(userName);
  if (valid) {
    userInput = nameUserInput(userName);
    break;
  } else {
    alert("Inavlid Name Please Enter Your Name Again");
  }

}


// Alert User To Move To Next
function alertUser(name) {
  alert(`Ok ${name} Lets Start The Game`);
}
alertUser(userName);


// Sentences
function sentences(sentence) {
  let newArray = [];
  let splited = sentence.split(" ");
  
  splited.forEach((element) => {
    let existing = newArray.find(item => item.word === element);
    
    if (!existing) {
      let count = splited.filter(word => word === element).length;
      newArray.push({ word: element, count: count });
    }
  });

  return newArray;

}


// Valid Sentence
function validSentence(validSentence) {
  if (validSentence.join("").trim() !== "") {
    return true;
  } else {
    return false;
  }
}


let promp = "";
let sente = "";
while(true) {

  promp = prompt("Enter Words");
  sente = sentences(promp);

  let valid = validSentence(sente);
  if (valid) {
    break;
  } else {
    alert("Enter Valid Words");
  }

}


console.log(sente);