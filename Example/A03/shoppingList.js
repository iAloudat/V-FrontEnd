// ******* Part 2 *******
// shopping list code

const input = document.querySelector(".listInput"); // input
const addBtn = document.querySelector(".addBtn"); // add
const itemsList = document.querySelector(".itemsList"); // ul

addBtn.addEventListener("click", addFunction);
itemsList.addEventListener("click", deleteItem);

// Item can be added by pressing enter on keyboard or click on add icon
function addFunction(event) {
  // preventing page reloading caused by form
  event.preventDefault();

  // item to be added
  // div container for the new item
  const itemDiv = document.createElement("div");
  // giving it class name to style it in CSS
  itemDiv.classList.add("itemContainer");

  // create li
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  newItem.classList.add("newItem");
  itemDiv.appendChild(newItem);

  // create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add("deleteBtn");
  itemDiv.appendChild(deleteBtn);

  // item div append to itemsList
  itemsList.appendChild(itemDiv);

  // clear input box after adding the item
  input.value = "";
}

// deleting items by clicking on trash icon
function deleteItem(e) {
  const item = e.target;
  if (item.classList[0] === "deleteBtn") {
    // deleting the parent element of the delete button
    item.parentElement.remove();
  }
}
