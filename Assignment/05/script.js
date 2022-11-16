const correctAns = ["C", "A", "A", "C", "B"];
const form = document.querySelector(".quizForm");
const label = document.querySelectorAll(".quizFormA");
const result = document.querySelector(".quizHeading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAns = [form.q1, form.q2, form.q3, form.q4, form.q5];

  //check ans
  userAns.forEach((ans, i) => {
    if (ans.value === correctAns[i]) {
      score += 1;
      for (let i = 0; i < 4; i++) {
        const isChecked = ans[i].checked;
        if (isChecked) {
          ans[i].parentElement.classList.add("correct");
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const isChecked = ans[i].checked;
        if (isChecked) {
          ans[i].parentElement.classList.add("wrong");
        }
      }
    }
  });

  scrollTo(0, 0);
  result.style.display = "block";
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector(".result").textContent = `${output}/5`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 1);
});
