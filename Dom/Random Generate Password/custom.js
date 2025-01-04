// Generate Random Password
let btnGenerate = document.getElementById("btnGenerate");
let textGenerate = document.getElementById("textGenerate");

let passCharacters = "frokok343ok4kofokoefkoe@oefef||eom5io00409flf;@@??//okfeokfeo3o330refokefck@!";

btnGenerate.addEventListener("click", randomPassword);

function randomPassword() {
  let passwordLength = Math.floor(Math.random() * 5) + 8; // generate a random password length between 8 and 12 characters
  let password = ""; // initialize an empty string to store the password characters
  for (let i = 0; i < passwordLength; i++) {
    password += passCharacters.charAt(Math.floor(Math.random() * passCharacters.length)); // add a random character to the password string
  }
  textGenerate.textContent = password; // display the completed password string
}























