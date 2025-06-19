let userScore = 0;
let computerScore = 0;

const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

function play(option) {
  const options = ["rock", "paper", "scissors"];
  const computerOption = options[Math.floor(Math.random() * 3)];

  if (option === computerOption) {
    resultEl.innerHTML = `🤝 It's a draw! You both chose <strong>${option}</strong>.`;
  } else if (
    (option === "rock" && computerOption === "scissors") ||
    (option === "paper" && computerOption === "rock") ||
    (option === "scissors" && computerOption === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    resultEl.innerHTML = `🎉 You win! <strong>${option}</strong> beats <strong>${computerOption}</strong>.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultEl.innerHTML = `💻 Computer wins! <strong>${computerOption}</strong> beats <strong>${option}</strong>.`;
  }
}

["rock", "paper", "scissors"].forEach(opt => {
  document.getElementById(opt).addEventListener("click", () => play(opt));
});
