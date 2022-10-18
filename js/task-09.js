const body = document.querySelector("body");
const span = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  span.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
