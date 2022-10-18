const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((item) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");
  ingredientsList.append(ingredientItem);
});
