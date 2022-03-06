const computerChoiceDisplay = document.getElementById(`computer-choice`);
const userChoiceDisplay = document.getElementById(`user-choice`);
const resultDisplay = document.getElementById(`result`);

const possibleChoices = document.querySelectorAll("button");

let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "Paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw 🤷‍♀️";
  }
  if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock")
  ) {
    result = "You Lost 😒";
  }
  if (
    (computerChoice === "Rock" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Rock")
  ) {
    result = "You Win! 🥳";
  }

  resultDisplay.innerHTML = result;
}
