// Show pop-up when open the page
let windowShow = document.getElementById("pop-up");
let windowHide = document.getElementById("windowHide");

window.onload = function () {
  windowShow.style.display = "block";
}

windowHide.addEventListener("click", hide);

function hide() {
  windowShow.style.display = "none";
  randomWord.style.display = "block";
  input.style.display = "block";
  randomSection.style.display = "block";
  widgets.style.display = "flex";
  decreaseTime();
}

// random-word section
let randomSection = document.getElementById("randomSection");
let randomWord = document.getElementById("random-word");

let randomArray = ["tomato", "mouse", "array", "kebab", "car", "shoes", "plates", "keyboard", "desk", "mobile", "student", "screen", "qustantinia", "apple", "ana7omar"];

let previousIndex = -1; // initialize with an invalid index

function randomWords() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * randomArray.length);
  } while (randomIndex === previousIndex); // repeat until a different index is selected
  previousIndex = randomIndex; // update the previous index
  randomWord.textContent = randomArray[randomIndex];
}

randomWords();

// Widgets
let widgets = document.getElementById("widgets");
let timeWidget = widgets.querySelector(".time h3");
let pointsWidget = widgets.querySelector(".points h3")

function decreaseTime() {
  let time = 20;
  let timerId = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(timerId);
      timeWidget.textContent = "Time's up!";
      wordTyped.disabled = true;
      gameFinished();
      window.location.reload();
    } else {
      timeWidget.textContent = `Time (${time})`;
    }
  }, 1000);
}

// input section
let input = document.getElementById("input");
let wordTyped = document.getElementById("wordTyped");
let btnCheck = document.getElementById("btn-check");

let points = 0;
function wordCheck() {
  if (wordTyped.value === randomWord.textContent) {
    alert("well done you gain +5 points");
    points += 5;
    pointsWidget.textContent = `Points (${points})`;
    randomWords();
    wordTyped.value = "";
  } else {
    alert("Error");
  }
}

btnCheck.addEventListener("click", wordCheck);

// when times out!
function gameFinished(){
  if (points >= 20) {
    alert(`Finished well done your points is ${points}`);
  } else if (points < 20) {
    alert(`Finished bad your points is ${points}`)
  }
}