let box = document.querySelectorAll(".box");
let h4 = document.getElementById("screen");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function(){
    clickWord(i);
  })
}

function clickWord(i) {
  h4.textContent = box[i].textContent;
}
