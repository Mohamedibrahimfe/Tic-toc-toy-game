const allSquares = document.querySelectorAll(".square");
const player = document.querySelector("#turn");

let boardArray = ["", "", "", "", "", "", "", "", ""];
const winnerArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentTurn = "X";
allSquares.forEach((square) => {
  square.addEventListener("click", () => {
    let value = square.getAttribute("value");
    let index = value - 1;
    let allSquaresContent = document.querySelector(`.square[value="${value}"]`);

    boardArray[index] = currentTurn;

    if (square.innerHTML === "" && currentTurn === "X") {
      square.innerHTML = "X";
      player.innerHTML = "Player O";
      currentTurn = "O";
    } else if (square.innerHTML === "" && currentTurn === "O") {
      square.innerHTML = "O";
      player.innerHTML = "Player X";
      currentTurn = "X";
    }

    checkWinner();
    checkDraw();

    if (currentTurn === "X") {
      allSquaresContent.style.backgroundColor = "red";
    } else if (currentTurn === "O") {
      allSquaresContent.style.backgroundColor = "blue";
    }
  });
});

function checkWinner() {
  for (let i = 0; i < winnerArray.length; i++) {
    let win = winnerArray[i];
    if (
      boardArray[win[0]] === boardArray[win[1]] &&
      boardArray[win[1]] === boardArray[win[2]] &&
      boardArray[win[0]] !== ""
    ) {
      declareWinner(boardArray[win[0]]);
      setTimeout(() => {
        reset();
      }, 1000);
      return;
    }
  }
}
function checkDraw() {
  if (boardArray.indexOf("") === -1 && !checkWinner()) {
    document.querySelector(
      "h1"
    ).innerHTML = `Draw! <i class="em em-handshake" aria-role="presentation" aria-label="HANDSHAKE"></i>`;
    document.querySelector("h1").style.backgroundColor = "Gray";
  }
}

function declareWinner(winner) {
  if (winner === "X") {
    document.getElementById(
      "turn"
    ).innerHTML = `X Has won <i class="em em-boom" aria-role="presentation" aria-label="COLLISION SYMBOL"></i>  `;
  } else if (winner === "O") {
    document.getElementById(
      "turn"
    ).innerHTML = `O Has won <i class="em em-boom" aria-role="presentation" aria-label="COLLISION SYMBOL"></i>`;
  }
}

// reset button
document.querySelector("button").addEventListener("click", reset());

function reset() {
  allSquares.forEach((square) => {
    square.innerHTML = "";
    player.innerHTML = "Player X";
    currentTurn = "X";
    boardArray = ["", "", "", "", "", "", "", "", ""];
    document.querySelector("h1").innerHTML = "Tic-tac-toe";
  });
}
