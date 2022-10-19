let counterValue = 0;

const targetBtnDecrement = document.querySelector('[data-action="decrement"]');

const targetBtnIncrement = document.querySelector('[data-action="increment"]');

const changeValue = document.querySelector('[id="value"]');

targetBtnDecrement.addEventListener("click", handleDecrementClick);

targetBtnIncrement.addEventListener("click", handleIncrementClick);

function handleDecrementClick() {
  counterValue -= 1;
  changeValue.textContent = counterValue;
}

function handleIncrementClick() {
  counterValue += 1;
  changeValue.textContent = counterValue;
}
