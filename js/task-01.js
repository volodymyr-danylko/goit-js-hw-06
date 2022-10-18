const categories = document.querySelectorAll(".item");

console.log("Number of categories:", categories.length);
console.log("");

categories.forEach((element) => {
  const categoryTitle = element.querySelector("h2");
  const innerLiElements = element.querySelectorAll("li");

  console.log("Category:", categoryTitle.innerHTML);
  console.log("Elements", innerLiElements.length);
  console.log("");
});
