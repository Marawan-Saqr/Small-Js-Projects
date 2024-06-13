//.Header .social-links .left (i) //
let social = document.querySelectorAll("i");

for (let i = 0; i < social.length; i++) {
  social[i].style.color = "red";

  if (social[i].hasAttribute("title")) {
    console.log("Found");
  } else {
    social[i].setAttribute("title", "Social Links");
  }
}

//.Header .social-links .right (button) //
let btn = document.getElementById("btn");
btn.textContent = "Login Here";

btn.onclick = ($event) => {
  console.log($event);
}

//.Header .small-desc (p) //
let more = document.getElementById("more");
let btnTwo = document.getElementById("btn-two");

btnTwo.onclick = function () {
  if (more.style.display === "none") {
    more.style.display = "block";
  } else {
    more.style.display = "none";
  }
}

//.form-validate form (input)
let inputEmail = document.querySelector("[name='email']");
let inputPass = document.querySelector("[name='password']");
let validOne = document.querySelector(".valid-one");
let validTwo = document.querySelector(".valid-two");

inputEmail.onmouseleave = function () {
  validOne.style.display = "block";
}

inputPass.onmouseleave = function () {
  validTwo.style.display = "block";
}

document.forms[0].onsubmit = function (e) {
  let emailValid = false;
  let passValid = false;

  if (inputEmail.value !== "" && inputEmail.value.length <= 10) {
    emailValid = true;
  }

  if (inputPass.value !== "" && inputPass.value.length <= 10) {
    passValid = true;
  }

  if (emailValid === false || passValid === false) {
    e.preventDefault();
  }
}

















