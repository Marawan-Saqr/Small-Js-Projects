//Array of words appear in the game
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
];

//Setting of levels
const lvl = {
    "Easy": 4,
    "Normal": 3,
    "Hard": 2
};

//Default Level
let defaultLevelName = "Easy";
let defaultLevelSeconds = lvl[defaultLevelName];

//Define Selectors of html
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

//Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

//Disable paste Event
input.onpaste = function () {
    return false;
}

//Start Game Function
startButton.onclick = function () {
    this.remove();
    input.focus();
    //Generate Word Function
    genWords();
}

//Word Function Declare
function genWords() {
    //Get random word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    //Get Word Index
    let wordIndex = words.indexOf(randomWord);
    //Remove word from array
    words.splice(wordIndex, 1);
    //show the random word
    theWord.innerHTML = randomWord;
    //Empty Upcoming words
    upcomingWords.innerHTML = '';
    //Generate Words
    for (let i = 0; i < words.length; i++) {
        //Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    //Call start play function 
    startPlay();
}


//Start play Function Declare
function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            //Stop Timer
            clearInterval(start);
            //Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                //Empty Input Field
                input.value = '';
                //increase score
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    //Call Generate Word Function
                    genWords();
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Well Done");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    //Remove Upcoming Words Box
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}