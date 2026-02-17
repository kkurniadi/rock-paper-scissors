function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch(choice) {
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
  switch(outcome) {
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

  const resultDiv = document.querySelector(".results");
  const scoresDiv = document.querySelector(".scores");

  scoresDiv.textContent = "Score is: 0 - 0";

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
  }

  /* for (let n = 0; n < rounds; n++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  } */

  /* if (humanScore > computerScore)
    console.log("Congratulations, you won the game!");
  else if (computerScore > humanScore)
    console.log("The computer won. Better luck next time!");
  else
    console.log("You and the computer are perfectly tied");
 */
// playGame(5);

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
