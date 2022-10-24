function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector(".change-color");
const colorVal = document.querySelector(".color");
const bodyBackgroundColor = document.querySelector("body");

btnClick.addEventListener("click", onClick);

function onClick() {
  const HexColor = getRandomHexColor();
  colorVal.textContent = HexColor;
  bodyBackgroundColor.style.backgroundColor = HexColor;
}
