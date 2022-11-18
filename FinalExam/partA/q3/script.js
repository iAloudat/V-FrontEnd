/* Assigning a function to the onclick event of the button with id b1. */
document.getElementById("b1").onclick = function () {
  onclick();
};

/**
 * When the button is clicked, change the background color of the button to red.
 */
function onclick() {
  document.getElementById("b1").style.backgroundColor = "red";
}

/* Assigning a function to the onmouseover event of the button with id b2. */
document.getElementById("b2").onmouseover = function () {
  mouseOver();
};

/* Assigning a function to the onmouseout event of the button with id b2. */
document.getElementById("b2").onmouseout = function () {
  mouseOut();
};

/**
 * When the mouse is over the button, change the background color to green.
 */
function mouseOver() {
  document.getElementById("b2").style.backgroundColor = "green";
}
/**
 * When the mouse leaves the button, change the background color to gray.
 */
function mouseOut() {
  document.getElementById("b2").style.backgroundColor = "#ccc";
}

/* Assigning a function to the onfocus event of the button with id b3. */
document.getElementById("b3").onfocus = function () {
  focus();
};

/* Assigning a function to the onblur event of the button with id b3. */
document.getElementById("b3").onblur = function () {
  blur();
};

/**
 * When the user clicks on the button, change the background color of the button to blue.
 */
function focus() {
  document.getElementById("b3").style.backgroundColor = "blue";
}
/**
 * When the user clicks on the button, change the background color of the button to gray.
 */

function blur() {
  document.getElementById("b3").style.backgroundColor = "#ccc";
}
