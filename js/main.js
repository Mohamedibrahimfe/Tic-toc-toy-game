const allSquares = document.querySelectorAll(".square");
const player = document.querySelector("#turn");
let boardArray = Array(9).fill("");
const winnerArray = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];
let currentTurn = "X";
let gameHasEnded = false;

allSquares.forEach((square) => {
  square.addEventListener("click", () => {
    if (gameHasEnded || square.innerHTML !== "") return;

    const index = square.getAttribute("value") - 1;
    boardArray[index] = currentTurn;
    square.innerHTML = currentTurn;
    player.innerHTML = `Player ${currentTurn === "X" ? "O" : "X"}`;
    square.style.backgroundColor = currentTurn === "X" ? "red" : "blue";

    if (checkWinner()) {
      declareWinner(currentTurn);
      gameHasEnded = true;
    } else if (!boardArray.includes("")) {
      declareDraw();
    } else {
      currentTurn = currentTurn === "X" ? "O" : "X";
    }
  });
});

function checkWinner() {
  return winnerArray.some(combo =>
    combo.every(index => boardArray[index] === currentTurn)
  );
}

function declareWinner(winner) {
  document.getElementById("turn").innerHTML = `${winner} Has won <i class="em em-boom" aria-role="presentation" aria-label="COLLISION SYMBOL"></i>`;
  document.getElementById("reset").classList.add("now");
}

function declareDraw() {
  document.querySelector("h1").innerHTML = `Draw! <i class="em em-handshake" aria-role="presentation" aria-label="HANDSHAKE"></i>`;
  gameHasEnded = true;
  document.getElementById("reset").classList.add("now");
}

document.querySelector("#reset").addEventListener("click", () => {
  boardArray.fill("");
  allSquares.forEach(square => {
    square.innerHTML = "";
    square.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  });
  player.innerHTML = "Player X";
  document.querySelector("h1").innerHTML = "Tic-tac-toe";
  gameHasEnded = false;
  currentTurn = "X";
  document.getElementById("reset").classList.remove("now");
});