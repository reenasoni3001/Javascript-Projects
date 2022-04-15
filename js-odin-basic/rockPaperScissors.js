const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const selection = [ROCK, PAPER, SCISSORS];
//Player 1 that randomly returns any value
const getComputersInput = () => {
  return selection[Math.floor(Math.random() * selection.length)];
};

//Player 2 that randomly returns any value
const getPlayersInput = () => {
  return prompt("Enter a Choice");
};

const playRound = () => {
  const player = getPlayersInput().toUpperCase();
  const computer = getComputersInput();

  if (computer === player) {
    console.log("Its a tie", computer, player);
  } else if (checkIfPlayerWins(player, computer)) {
    console.log("player wins", computer, player);
  } else {
    console.log("computer wins ", computer, player);
  }
};

playRound();

function checkIfPlayerWins(player, computer) {
  return (
    (player === ROCK && computer === SCISSORS) ||
    (player == PAPER && computer == ROCK) ||
    (player == SCISSORS && computer == PAPER)
  );
}
//rock , paper , sc
// p = rock and c = scissors / p win
// p = paper and c= rock / p wins
//p = s and c  = paper / p wins
//else c wins
