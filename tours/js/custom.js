// Get Elements For Dark Mode
let btnDark = document.getElementById("btn-dark");
let navbarBrand = document.querySelector(".navbar-brand");
let navLink = document.querySelectorAll(".nav-link");

// Eventlistener On Button
btnDark.addEventListener("click", function () {
  if (btnDark.innerHTML === `<i class="fa-solid fa-moon"></i>`) {
    btnDark.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    btnDark.style.color = "#fff";
    windowBlackMode();
  } else {
    btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    btnDark.style.color = "black";
    windowWhiteMode();
  }
});

// Functions Of Local Storage Dark Mode
function windowBlackMode() {
  window.localStorage.setItem("textColor", "white");
  window.localStorage.setItem("backgroundColor", "black");
  navbarBrand.style.color = window.localStorage.getItem("textColor");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.color = window.localStorage.getItem("textColor");
  }
  document.body.style.color = window.localStorage.getItem("textColor");
  document.body.style.backgroundColor = window.localStorage.getItem("backgroundColor");
}

// Functions Of Local Storage White Mode
function windowWhiteMode() {
  window.localStorage.setItem("textColor", "rgba(0, 0, 0, 0.65)");
  window.localStorage.setItem("backgroundColor", "white");
  navbarBrand.style.color = window.localStorage.getItem("textColor");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.color = window.localStorage.getItem("textColor");
  }
  document.body.style.color = window.localStorage.getItem("textColor");
  document.body.style.backgroundColor = window.localStorage.getItem("backgroundColor");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Get the select element for changing fonts
  const selects = document.querySelector(".font");

  // Event listener on selects
  if (selects) {
    selects.addEventListener("change", function(e) {
      const selectedFont = e.target.value;
      window.localStorage.setItem("fontChange", selectedFont);
      document.body.style.fontFamily = selectedFont;
    });
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Appear Button When Page Load
let appearAfter = document.getElementById("appearAfter");

setTimeout(() => {
  appearAfter.classList.add("show");
}, 3000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Wow Js Animation
new WOW().init();

////////////////////////////////////////////////////////////////////////////////////////////////////////////