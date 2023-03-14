const div = document.querySelector("div");

//loop 100 times and create a button and append it to div in each loop
for (let i = 0; i < 100; i++) {
  const button = document.createElement("button");
  button.innerHTML = "QUIZ";
  div.appendChild(button);
}
