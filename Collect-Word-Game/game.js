// Show Random Character In Boxes 
let boxes = document.querySelectorAll(".boxes");


const word = "HELO";
let usedChars = [];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function(){
    handleClick(i);
  });
}

function handleClick(i) {
  let randomChar = "";
  let remainingChars = word.split("").filter(char => !usedChars.includes(char));
  if (Math.random() < 0.5 || remainingChars.length === 0) {
    randomChar = "";
  } else {
    randomChar = remainingChars[Math.floor(Math.random() * remainingChars.length)];
    usedChars.push(randomChar);
  }
  boxes[i].classList.add("flipped");
  boxes[i].textContent = randomChar;
  if (boxes[i].classList.contains("flipped") && boxes[i].textContent === randomChar) {
    boxes[i].style.pointerEvents = "none";
  }
  lifes(i);
  winner();
}

// life's Functions
let life = document.querySelectorAll(".top-nav h6");

let emptyBoxes = 0;

// if lose all lifes function
function lifes(i) {
  if (boxes[i].textContent === "") {
    emptyBoxes++;
    if (emptyBoxes <= life.length) {
      life[emptyBoxes - 1].textContent = "X";
      if (emptyBoxes === 5) {
        alert("Sorry You Lose Your Lifes Is Over");
        window.location.reload();
      }
    }
  }
}

function winner() {
  let remainingChars = word.split("").filter(char => !usedChars.includes(char));
  if (remainingChars.length === 0) {
    alert("Congratulations, you've won!");
    window.location.reload();
  }
}