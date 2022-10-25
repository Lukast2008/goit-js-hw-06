function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDivEl = document.querySelector("#boxes");
const inputValue = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonRemoveEl = document.querySelector("[data-destroy]");

let arr = [];

function removeDivEl() {
  createDivEl.innerHTML = "";
  inputValue.value = "";
  arr = [];
}

function createBoxes(amount) {
  createDivEl.innerHTML = "";
  arr = [];
  for (let i = 0; i < inputValue.value; i += 1) {
    const divItem = document.createElement("div");

    divItem.style.width = `${30 + i * 10}px`;
    divItem.style.height = `${30 + i * 10}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    arr.push(divItem);
  }
  createDivEl.append(...arr);
}

buttonCreateEl.addEventListener("click", createBoxes);

buttonRemoveEl.addEventListener("click", removeDivEl);
