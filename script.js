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
  switch(choice) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

console.log(getHumanChoice());