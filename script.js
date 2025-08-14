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

function getHumanChoice() {
  let choice = prompt("Play rock, paper, or scissors");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let outcome = `${humanChoice.toLowerCase()} ${computerChoice}`;
  switch(outcome) {
    case "rock scissors":
    case "scissors paper":
    case "paper rock":
      console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()} beats ${computerChoice}`);
      humanScore++;
      break;
    case "rock paper":
    case "scissors rock":
    case "paper scissors":
      console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.toLowerCase()}`);
      computerScore++;
      break;
    default:
      console.log("It's a tie!");
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);