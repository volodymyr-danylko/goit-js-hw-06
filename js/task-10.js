const elementsList = document.getElementById("boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
let elementsCount = 0;

input.addEventListener("input", handleInputChange);
createBtn.addEventListener("click", () => handleCreateBtnClick(elementsCount));
destroyBtn.addEventListener("click", handleDestroyBtnClick);

function handleCreateBtnClick(count) {
  if (count) {
    const arr = [];

    for (let index = 0; index < count; index++) {
      const newColor = getRandomHexColor();
      const newSize = 30 + index * 10;
      const newElement = document.createElement("div");

      newElement.style.width = `${newSize}px`;
      newElement.style.height = `${newSize}px`;
      newElement.style.backgroundColor = `${newColor}`;

      arr.push(newElement);
    }

    elementsList.replaceChildren(...arr);
  }
}

function handleDestroyBtnClick() {
  elementsList.replaceChildren();
  elementsCount = 0;
  input.value = "";
}

function handleInputChange(event) {
  elementsCount = event.currentTarget.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
