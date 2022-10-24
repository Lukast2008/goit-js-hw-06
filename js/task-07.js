const inputValue = document.querySelector("#font-size-control");

const changeSizeFont = document.querySelector("#text");

inputValue.addEventListener("input", (event) => {
  changeSizeFont.style.fontSize = `${event.currentTarget.value}px`;
});
