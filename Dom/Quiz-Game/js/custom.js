//(Introduction)
let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");
let introduction = document.getElementById("introduction");

btnYes.onclick = function btnYes() {
  introduction.style.display = "none";
  difficulty.style.display = "block";
}

btnNo.onclick = function btnNo() {
  window.close();
}
////////////////////////////////////////////////////////////

//(Select Difficulty)
let btnEasy = document.getElementById("btnEasy");
let btnNormal = document.getElementById("btnNormal");
let btnHard = document.getElementById("btnHard");
let difficulty = document.getElementById("difficulty");
let easySection = document.getElementById("easySection");
let normalSection = document.getElementById("normalSection");
let hardSection = document.getElementById("hardSection");
let counterDiv = document.getElementById("counter");
let counterScore = 0;
/////////////////////////////////////////////////////////////////
//(yourScore)
let yourScore = document.getElementById("yourScore");
let score = document.getElementById("score");

//(Easy Difficulty button choose)
btnEasy.onclick = function btnEasy() {
  difficulty.style.display = "none";
  easySection.style.display = "block";
  counterDiv.style.display = "block";
  //Function countDown
  function countDown() {
    counterDiv.innerHTML -= 1;
    if (counterDiv.innerHTML === "0") {
      clearInterval(counter);
      alert("Time Is Over");
      yourScore.style.display = "block";
      score.append(`your Score is ${counterScore} / 15`);
      easySection.style.display = "none";
      counterDiv.remove();
    }
  }
  let counter = setInterval(countDown, 1000);
}

/////////////////////////////////////////////////////////////////
//(Easy Mode Game Score)
let btnFinish = document.getElementById("btnFinish");

btnFinish.onclick = function () {
  switch (span1.textContent) {
    case "Sundar Pichai":
      counterScore += 5;
      break;
    case "Sundar pichai":
      counterScore += 5;
      break;
    case "sundar Pichai":
      counterScore += 5;
      break;
    case "sundar pichai":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span2.textContent) {
    case "Steve Jobs":
      counterScore += 5;
      break;
    case "Steve jobs":
      counterScore += 5;
      break;
    case "steve Jobs":
      counterScore += 5;
      break;
    case "steve jobs":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span3.textContent) {
    case "Elon Musk":
      counterScore += 5;
      break;
    case "Elon musk":
      counterScore += 5;
      break;
    case "elon Musk":
      counterScore += 5;
      break;
    case "elon musk":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }
  yourScore.style.display = "block";
  score.append(`your Score is ${counterScore} / 15`);
  easySection.style.display = "none";
  counterDiv.textContent = "";
  counterDiv.remove();
}
/////////////////////////////////////////////////////////////////

//(Normal Difficulty button choose)
btnNormal.onclick = function btnNormal() {
  difficulty.style.display = "none";
  normalSection.style.display = "block";
  counterDiv.style.display = "block";
  //Function countDown
  function countDown() {
    counterDiv.innerHTML -= 1;
    if (counterDiv.innerHTML === "0") {
      clearInterval(counter);
      alert("Time Is Over");
      yourScore.style.display = "block";
      score.append(`your Score is ${counterScore} / 15`);
      normalSection.style.display = "none";
      counterDiv.remove();
    }
  }
  let counter = setInterval(countDown, 1000);
}
/////////////////////////////////////////////////////////////////
//(Normal Mode Game Score)
let btnNormalFinish = document.getElementById("btnNormalFinish");

btnNormalFinish.onclick = function () {
  switch (span4.textContent) {
    case "2004":
      counterScore += 5;
      break;
    case "2004":
      counterScore += 5;
      break;
    case "2004":
      counterScore += 5;
      break;
    case "2004":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span5.textContent) {
    case "Neil Armstrong":
      counterScore += 5;
      break;
    case "Neil armstrong":
      counterScore += 5;
      break;
    case "neil Armstrong":
      counterScore += 5;
      break;
    case "neil armstrong":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span6.textContent) {
    case "Eight":
      counterScore += 5;
      break;
    case "eight":
      counterScore += 5;
      break;
    case "8":
      counterScore += 5;
      break;
    case "8":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }
  yourScore.style.display = "block";
  score.append(`your Score is ${counterScore} / 15`);
  normalSection.style.display = "none";
  counterDiv.textContent = "";
  counterDiv.remove();
}
/////////////////////////////////////////////////////////////////
//(Hard Difficulty button choose)
btnHard.onclick = function btnHard() {
  difficulty.style.display = "none";
  hardSection.style.display = "block";
  counterDiv.style.display = "block";
  //Function countDown
  function countDown() {
    counterDiv.innerHTML -= 1;
    if (counterDiv.innerHTML === "0") {
      clearInterval(counter);
      alert("Time Is Over");
      yourScore.style.display = "block";
      score.append(`your Score is ${counterScore} / 15`);
      hardSection.style.display = "none";
      counterDiv.remove();
    }
  }
  let counter = setInterval(countDown, 1000);
}
/////////////////////////////////////////////////////////////
//(Hard Mode Game Score)
let btnHardFinish = document.getElementById("btnHardFinish");

btnHardFinish.onclick = function () {
  switch (span7.textContent) {
    case "206":
      counterScore += 5;
      break;
    case "206":
      counterScore += 5;
      break;
    case "206":
      counterScore += 5;
      break;
    case "206":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span8.textContent) {
    case "1930":
      counterScore += 5;
      break;
    case "1930":
      counterScore += 5;
      break;
    case "1930":
      counterScore += 5;
      break;
    case "1930":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }

  switch (span9.textContent) {
    case "1903":
      counterScore += 5;
      break;
    case "1903":
      counterScore += 5;
      break;
    case "1903":
      counterScore += 5;
      break;
    case "1903":
      counterScore += 5;
      break;
    default:
      counterScore += 0;
  }
  yourScore.style.display = "block";
  score.append(`your Score is ${counterScore} / 15`);
  hardSection.style.display = "none";
  counterDiv.textContent = "";
  counterDiv.remove();
}
/////////////////////////////////////////////////////////////////

//Inputs & buttons(submits)
let input = document.querySelectorAll("input");
let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let submit3 = document.getElementById("submit3");
let submit4 = document.getElementById("submit4");
let submit5 = document.getElementById("submit5");
let submit6 = document.getElementById("submit6");
let submit7 = document.getElementById("submit7");
let submit8 = document.getElementById("submit8");
let submit9 = document.getElementById("submit9");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let span5 = document.getElementById("span5");
let span6 = document.getElementById("span6");
let span7 = document.getElementById("span7");
let span8 = document.getElementById("span8");
let span9 = document.getElementById("span9");

submit1.onclick = function () {
  let data = input[0].value;
  let newData = document.createElement("span");
  newData.append(data);
  span1.append(newData);
  input[0].value = "";
  submit1.style.display = "none";
}

submit2.onclick = function () {
  let data = input[1].value;
  let newData = document.createElement("span");
  newData.append(data);
  span2.append(newData);
  input[1].value = "";
  submit2.style.display = "none";
}

submit3.onclick = function () {
  let data = input[2].value;
  let newData = document.createElement("span");
  newData.append(data);
  span3.append(newData);
  input[2].value = "";
  submit3.style.display = "none";
}

submit4.onclick = function () {
  let data = input[3].value;
  let newData = document.createElement("span");
  newData.append(data);
  span4.append(newData);
  input[3].value = "";
  submit4.style.display = "none";
}

submit5.onclick = function () {
  let data = input[4].value;
  let newData = document.createElement("span");
  newData.append(data);
  span5.append(newData);
  input[4].value = "";
  submit5.style.display = "none";
}

submit6.onclick = function () {
  let data = input[5].value;
  let newData = document.createElement("span");
  newData.append(data);
  span6.append(newData);
  input[5].value = "";
  submit6.style.display = "none";
}

submit7.onclick = function () {
  let data = input[6].value;
  let newData = document.createElement("span");
  newData.append(data);
  span7.append(newData);
  input[6].value = "";
  submit7.style.display = "none";
}

submit8.onclick = function () {
  let data = input[7].value;
  let newData = document.createElement("span");
  newData.append(data);
  span8.append(newData);
  input[7].value = "";
  submit8.style.display = "none";
}

submit9.onclick = function () {
  let data = input[8].value;
  let newData = document.createElement("span");
  newData.append(data);
  span9.append(newData);
  input[8].value = "";
  submit9.style.display = "none";
}
/////////////////////////////////////////////////////////////////
//(btnRestart Function)

let btnRestart = document.getElementById("btnRestart");
btnRestart.onclick = function () {
  window.location.reload();
}