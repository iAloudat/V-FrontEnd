const sDisplay1 = document.querySelector("#p1");
const sDisplay2 = document.querySelector("#p2");
let score1 = 0;
let score2 = 0;
const selector = document.querySelector("#selector");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btnR = document.querySelector("#btnR");

// take the final score
let finalScore = parseInt(selector.value);

//  update the final score
selector.addEventListener("change", function () {
  finalScore = parseInt(this.value);
  reset();
});
// add listerner to btn1
btn1.addEventListener("click", () => {
  score1++;
  sDisplay1.innerText = score1;
  scoreCheck(); // checks for win or lose
});
// add listerner to btn2
btn2.addEventListener("click", () => {
  score2++;
  sDisplay2.innerText = score2;
  scoreCheck(); // checks for win or lose
});

btnR.addEventListener("click", reset);

function scoreCheck() {
  if (score1 === finalScore) {
    sDisplay1.classList.add("playerWinner");
    sDisplay2.classList.add("playerLoser");
    btn1.disabled = true;
    btn2.disabled = true;
  } else if (score2 === finalScore) {
    sDisplay2.classList.add("playerWinner");
    sDisplay1.classList.add("playerLoser");
    btn1.disabled = true;
    btn2.disabled = true;
  }
}

function reset() {
  sDisplay1.innerText = "0";
  sDisplay2.innerText = "0";
  score1 = 0;
  score2 = 0;
  btn1.disabled = false;
  btn2.disabled = false;
  sDisplay1.classList.remove("playerWinner", "playerLoser");
  sDisplay2.classList.remove("playerWinner", "playerLoser");
}
