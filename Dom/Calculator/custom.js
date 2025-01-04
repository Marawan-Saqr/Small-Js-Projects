let input = document.getElementById("input");
let numberBtn = document.querySelectorAll(".number");
let equal = document.getElementById("equal");
let reload = document.getElementById("reload");
let del = document.getElementById("del");


//Write on screen
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", screen);
  function screen () {
    input.value += numberBtn[i].textContent;
  }
}

//Math function
equal.addEventListener("click", result);
function result () {
  try {
    input.value = eval(input.value);
  } catch (e) {
      alert(e.message);
  }
}

//reload function
reload.addEventListener("click", reloading);
function reloading(){
  input.value = "";
}

//del function
del.addEventListener("click", delFunction);
function delFunction(){
  input.value = input.value.slice(0, -1);
}