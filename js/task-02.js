"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const listItem = document.createElement("li");

for (let i = 0; i < ingredients.length; i += 1) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  list.append(listItem);
}

console.log(list);
