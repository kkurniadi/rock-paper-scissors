function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

/* function getHumanChoice() {
  let choice = prompt("Play rock, paper, or scissors");
  return choice.toLowerCase();
} */

function determineWinner(human, computer) {
  const outcome = `${human} ${computer}`;
  switch (outcome) {
    case "rock scissors":
    case "scissors paper":
    case "paper rock":
      return "W";
    case "rock paper":
    case "scissors rock":
    case "paper scissors":
      return "L";
    default:
      return "D";
  }
}

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const resultDiv = document.querySelector(".results");
const scoresDiv = document.querySelector(".scores");

scoresDiv.textContent = "Score is: 0 - 0";
scoresDiv.classList.add("announcement");

function announceWinner() {
  const winnerDiv = document.createElement("div");
  body.insertBefore(winnerDiv, scoresDiv);
  if (humanScore > computerScore) {
    winnerDiv.style.backgroundColor = "lightgreen";
    winnerDiv.textContent = "Congratulations, you won the game!";
  }
  else if (computerScore > humanScore) {
    winnerDiv.style.backgroundColor = "lightpink";
    winnerDiv.textContent = "The computer won. Better luck next time!";
  }
  else
    winnerDiv.textContent = "You and the computer are perfectly tied… somehow…";
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(humanChoice, computerChoice);
  if (result == "W") {
    resultDiv.textContent = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    humanScore++;
  } else if (result == "L") {
    resultDiv.textContent = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    computerScore++;
  } else {
    resultDiv.textContent = `It's a tie! You both played ${humanChoice}`;
  }
  scoresDiv.textContent = `Score is: ${humanScore} - ${computerScore}`;
  if (humanScore == 5 || computerScore == 5)
    announceWinner();
}

/* for (let n = 0; n < rounds; n++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
} */

// playGame(5);

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
