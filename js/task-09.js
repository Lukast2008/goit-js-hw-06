function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector(".change-color");
const colorVal = document.querySelector(".color");

btnClick.addEventListener("click", onClick);

function onClick() {
  const HexColor = getRandomHexColor();
  colorVal.textContent = HexColor;
  colorVal.style.backgroundColor = HexColor;
}
