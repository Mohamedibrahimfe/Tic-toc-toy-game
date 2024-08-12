const allSquares = document.querySelectorAll(".square");
const player = document.querySelector("#turn");
const autoplayCheckbox = document.querySelector("#autoplay");
let boardArray = ["", "", "", "", "", "", "", "", ""];
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

    let index = square.getAttribute("value") - 1;
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
    if(gameHasEnded==true){
      
      autoRestartGane();
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
      return true;
    }
  }
  return false;
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

function autoRestartGane() {
    setInterval(() => {
        document.getElementById('turn').innerText+='.';
    },1000)
    setTimeout(() => {
      window.location.reload();
    },3000)
     let randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    allSquares[randomIndex].click();
  }
   

document.querySelector("#reset").addEventListener("click", () => {
  boardArray = ["", "", "", "", "", "", "", "", ""];
  allSquares.forEach((square) => {
    square.innerHTML = "";
    square.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  });
  player.innerHTML = "Player X";
  document.querySelector("h1").innerHTML = "Tic-tac-toe";
  gameHasEnded = false;
  currentTurn = "X";
  document.getElementById("reset").classList.remove("now");
});
