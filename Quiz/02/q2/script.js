// function that takes the element and update it using oninput and the function that is added in html

function updateHeading(updatedText) {
  document.querySelector("h1").textContent = `Welcome, ${updatedText}`;
}
