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

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  arr.push(listItem);
}

list.append(...arr);
console.log(list);
