// Dark Mode
const audio = new Audio();
audio.src = "../Assets/Sounds/Audio From Mouse Click.mp3";
let body = document.querySelector("body");
let btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", darkMode);

function darkMode() {
  if (btnDark.textContent === "Dark Mode") {
    body.style.backgroundColor = "#252525";
    body.style.color = "#fff";
    btnDark.textContent = "Light Mode";
    btnDark.style.backgroundColor = "#fff";
    btnDark.style.color = "black";
    audio.play();
    btnPomodoro.style.backgroundColor = "#fff";
    btnPomodoro.style.color = "black";
  } else if (btnDark.textContent === "Light Mode") {
    body.style.backgroundColor = "antiquewhite";
    body.style.color = "black";
    btnDark.textContent = "Dark Mode";
    btnDark.style.backgroundColor = "black";
    btnDark.style.color = "#fff";
    audio.play();
    btnPomodoro.style.backgroundColor = "black";
    btnPomodoro.style.color = "#fff";
  }
}

// Time countDown Function
let time = document.getElementById("time");
let btnPomodoro = document.getElementById("btnPomodoro");
const audioFinished = new Audio();
audioFinished.src = "../Assets/Sounds/It's time!! UFC announcer (Sound effect).mp3";

let interval; // declare the interval variable outside of the timeCountDown function

btnPomodoro.addEventListener("click", startStopCountDown);

function startStopCountDown() {
  if (btnPomodoro.textContent === "Click To Start") { // start a new countdown
    audio.play();
    btnPomodoro.textContent = "Stop";
    let minutes = 25;
    let seconds = 0;

    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          audioFinished.play();
          alert("Time's up!");
          btnPomodoro.textContent = "Click To Start";
          minutes = 25;
          seconds = 0;
          time.textContent = "25:00";
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  } else { // stop the current countdown
    audio.play();
    clearInterval(interval);
    btnPomodoro.textContent = "Click To Start";
    time.textContent = "25:00";
  }
}