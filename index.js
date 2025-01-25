//  Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let = playerScore = 0;
let = computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          result = "You win!";
          playerScore++;
        } else {
          result = "Computer wins!";
          computerScore++;
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          result = "You win!";
          playerScore++;
        } else {
          result = "Computer wins!";
          computerScore++;
        }
        break;
      case "scissors":
        if (computerChoice === "paper") {
          result = "You win!";
          playerScore++;
        } else {
          result = "Computer wins!";
          computerScore++;
        }
        break;
    }
  }
  playerDisplay.textContent = `Player chose: ${playerChoice}`;
  computerDisplay.textContent = `Computer chose: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "You win!":
      resultDisplay.style.color = "green";
      playerScore + 1;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "Computer wins!":
      resultDisplay.style.color = "red";
      computerScore + 1;
      computerScoreDisplay.textContent = computerScore;
      break;
    default:
      resultDisplay.style.color = "black";
  }
}
