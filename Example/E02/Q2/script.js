function Counter() {
  /* Getting the element with the id of quantity. */
  let quantity = document.getElementById("quantity");
  /* Getting the element with the id of addition. */
  let addition = document.getElementById("addition");
  /* Getting the element with the id of subtract. */
  let subtract = document.getElementById("subtract");
  let count = 0;
  /* Adding an event listener to the addition button. */
  addition.addEventListener("click", additionQuantity);
  /* Adding an event listener to the subtract button. */
  subtract.addEventListener("click", subtractQuantity);

  /* It increments the count variable by 1 and then updates the quantity*/
  function additionQuantity() {
    count++;
    quantity.innerHTML = count;
  }

  /* It subtract the count variable by 1 and then updates the quantity*/
  function subtractQuantity() {
    count--;
    quantity.innerHTML = count;
  }
}

Counter();
