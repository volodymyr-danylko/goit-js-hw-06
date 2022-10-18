const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

const spanDefaultText = "Anonymous";

const changeSpan = (event) => {
  if (event.target.value) {
    span.innerText = event.currentTarget.value;
  } else {
    span.innerText = spanDefaultText;
  }
};

input.addEventListener("input", changeSpan);
