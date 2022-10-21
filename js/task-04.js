let counterValue = 0;

const targetBtnDecrement = document.querySelector('[data-action="decrement"]');

const targetBtnIncrement = document.querySelector('[data-action="increment"]');

const changeValue = document.querySelector('[id="value"]');

targetBtnDecrement.addEventListener("click", handleDecrementClick);

console.log(targetBtnDecrement);

targetBtnIncrement.addEventListener("click", handleIncrementClick);

function handleDecrementClick() {
  changeValue.textContent = counterValue -= 1;
}

function handleIncrementClick() {
  changeValue.textContent = counterValue += 1;
}
