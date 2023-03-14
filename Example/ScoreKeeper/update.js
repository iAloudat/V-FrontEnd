// refactored edition with objects and additions

const p1 = {
  score: 0,
  button: document.querySelector("#btn1"),
  display: document.querySelector("#p1"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#btn2"),
  display: document.querySelector("#p2"),
};

const selector = document.querySelector("#selector");
const btnR = document.querySelector("#btnR");

const body = document.querySelector("body"); // select body for keyboard controls

let pointKeysOn = false;
let resetKeysOn = false;

// take the final score from selector
let finalScore = parseInt(selector.value);
let selectorIndex = 0;

//  update the final score if selector changes
selector.addEventListener("change", function () {
  finalScore = parseInt(this.value);
  reset(this.selectedIndex);
});

// add listerner to btn1 & btn2
p1.button.addEventListener("click", function () {
  scoreUpdate(p1, p2); // updates score
  winBy2(p1, p2); // checks for win by 2 points condition
});
p2.button.addEventListener("click", function () {
  scoreUpdate(p2, p1); // updates score
  winBy2(p1, p2); // checks for win by 2 points condition
});
// add listerner to reset
btnR.addEventListener("click", function () {
  reset(selector.selectedIndex); //passes the select index for return to the same point
});

// function for adding keyboard controls for points
function pointKeys(evt) {
  switch (evt.code) {
    case "Numpad1":
      scoreUpdate(p1, p2);
      winBy2(p1, p2);
      break;
    case "Digit1":
      scoreUpdate(p1, p2);
      winBy2(p1, p2);
      break;
    case "Numpad2":
      scoreUpdate(p2, p1);
      winBy2(p1, p2);
      break;
    case "Digit2":
      scoreUpdate(p2, p1);
      winBy2(p1, p2);
      break;
  }
}

// function for adding keyboard controls for reseting
function resetKeys(evt) {
  switch (evt.code) {
    case "KeyR":
      reset(selector.selectedIndex);
      break;
    case "Enter":
      reset(selector.selectedIndex);
      break;
    case "NumpadEnter":
      reset(selector.selectedIndex);
      break;
  }
}

// function for enabling keyboard depending on options
function keyboardEnable(option) {
  if (option === 1) {
    body.addEventListener("keydown", pointKeys);
    pointKeysOn = true;
  } else if (option === 2) {
    body.addEventListener("keydown", resetKeys);
    resetKeysOn = true;
  }
}

// enabling keyboard
keyboardEnable(1);

keyboardEnable(2);

// function for disabling keyboard with options
function keyboardDisable(option) {
  if (option === 1) {
    body.removeEventListener("keydown", pointKeys);
    pointKeysOn = false;
  } else if (option === 2) {
    body.removeEventListener("keydown", resetKeys);
    resetKeysOn = false;
  }
}

function scoreUpdate(player, opponent) {
  //adds score
  player.score++;
  player.display.innerText = player.score;
  player.button.blur();
  // then checks if game over, without a game over variable switch. If buttons and keyboard get disabled the game cannot continue anyway.
  if (player.score === finalScore) {
    player.display.classList.add("has-text-success");
    opponent.display.classList.add("has-text-danger");
    player.button.disabled = true;
    opponent.button.disabled = true;
    keyboardDisable(1);
  }
}

// function for win by 2 points condition
function winBy2(player, opponent) {
  if (player.score === opponent.score && player.score === finalScore - 1) {
    // checks for contidion
    finalScore++;
    selector.selectedOptions[0].value = finalScore; //changes selected option value and text reflecting the new final score
    selector.classList.add("overtime"); // overtime styling
    selector.selectedOptions[0].innerText = `Tie BREAK to ${finalScore}`;
  }
}

function reset(index) {
  // resets all player data and buttons
  for (let p of [p1, p2]) {
    p.display.innerText = "0";
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.score = 0;
    p.button.blur();
    p.button.disabled = false;
  }
  // resets selection options to defaults
  for (let i = 0; i <= 6; i++) {
    selector[i].value = 5 + i;
    selector[i].innerText = 5 + i;
  }
  selector.selectedIndex = index; //selects last selected option
  selector.classList.remove("overtime"); // removes overtime styling
  selector.blur();
  btnR.blur();
  finalScore = parseInt(selector.value); // selects final score accordingly
  if (!pointKeysOn) {
    keyboardEnable(1);
  }
  if (!resetKeysOn) {
    keyboardEnable(2);
  }
}
