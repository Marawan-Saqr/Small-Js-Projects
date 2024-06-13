let inputElement = document.getElementById("input");
let divElement = document.getElementById("div");

input.oninput = function () {
  let defaultValue = 0;
  let dollar = 25;
  let userMoney = inputElement.value;
  let result = dollar * userMoney;
  divElement.innerHTML = `${userMoney} USD Dollar = ${result} Egyptian Pound`;

  if (inputElement.value === "") {
    divElement.innerHTML = `${defaultValue} USD Dollar = ${result} Egyptian Pound`;
  }
}



























