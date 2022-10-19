const inputValue = document.querySelector('[id="name-input"]');

const output = document.querySelector('[id="name-output"]');

inputValue.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});
