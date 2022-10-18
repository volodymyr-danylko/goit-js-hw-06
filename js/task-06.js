const input = document.getElementById("validation-input");

const validCount = +input.dataset.length;

const handleLostFocuse = (event) => {
  if (event.currentTarget.value.length === validCount) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", handleLostFocuse);
