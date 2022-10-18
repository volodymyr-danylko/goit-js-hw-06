const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

const handleRangeChange = (event) => {
  span.style.fontSize = `${event.currentTarget.value}px`;
};

input.addEventListener("input", handleRangeChange);
