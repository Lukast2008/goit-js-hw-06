"use strict";

const list = document.querySelectorAll("li.item");

console.log(list);

console.log(`number of catecories: ${list.length}`);

for (let i of list) {
  console.log(`Category: ${i.firstElementChild.textContent}`);
  console.log(`Elements: ${i.children[1].childElementCount}`);
}
