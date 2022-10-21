"use strict";

const inputValue = document.querySelector("#validation-input");

const dataLength = inputValue.dataset.length;

inputValue.addEventListener("blur", () => {
  inputValue.classList.remove("valid", "invalid");
  if (inputValue.value.length === Number(dataLength)) {
    inputValue.classList.add(`valid`);
  } else {
    inputValue.classList.add(`invalid`);
  }
});
