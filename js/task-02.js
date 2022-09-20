const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList = "item";
  return itemEl;
});
const listItem = document.querySelector("ul#ingredients");
listItem.append(...ingredientsEl)


