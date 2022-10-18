const counter = document.getElementById("counter");
const span = document.getElementById("value");

const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = span.innerText;

const increment = () => {
  counterValue++;
  span.textContent = counterValue;
};

const decrement = () => {
  counterValue--;
  span.innerText = counterValue;
};

increaseBtn.addEventListener("click", increment);
decreaseBtn.addEventListener("click", decrement);
