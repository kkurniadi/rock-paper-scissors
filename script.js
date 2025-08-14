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
  return choice.toLowerCase();
}

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  const result = determineWinner(humanChoice, computerChoice);
  if (result == "W") {
    console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    humanScore++;
  } else if (result == "L") {
    console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log("It's a tie!");
  }
}

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}
