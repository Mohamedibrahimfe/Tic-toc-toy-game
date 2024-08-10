let buttons = document.querySelectorAll(".square");

let xTurn = true;
let myArray = ["", "", "", "", "", "", "", "", ""];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (xTurn && button.innerHTML == "") {
      button.innerHTML = "x";
      button.disabled = true;
      xTurn = false;
      document.getElementById("turn").innerHTML = "Player X";
      myArray.push(button.innerText);
    } else {
      if (button.innerHTML == "") {
        button.innerHTML = "o";
        xTurn = true;
        button.disabled = true;
        document.getElementById("turn").innerHTML = "Player O";
        myArray.push(button.innerText);
      }
    }
    checkWinner();
  });
});

function checkWinner() {
  if (
    myArray[0] == myArray[1] &&
    myArray[0] == myArray[2] &&
    myArray[0] != ""
  ) {
    declareWinner(myArray[0]);
  } else if (
    myArray[3] == myArray[4] &&
    myArray[3] == myArray[5] &&
    myArray[3] != ""
  ) {
    declareWinner(myArray[3]);
  } else if (
    myArray[6] == myArray[7] &&
    myArray[6] == myArray[8] &&
    myArray[6] != ""
  ) {
    declareWinner(myArray[6]);
  } else if (
    myArray[0] == myArray[3] &&
    myArray[0] == myArray[6] &&
    myArray[0] != ""
  ) {
    declareWinner(myArray[0]);
  } else if (
    myArray[1] == myArray[4] &&
    myArray[1] == myArray[7] &&
    myArray[1] != ""
  ) {
    declareWinner(myArray[1]);
  } else if (
    myArray[2] == myArray[5] && 
    myArray[2] == myArray[8] &&
    myArray[2] != ""
  ) {
    declareWinner(myArray[2]);
  } else if (
    myArray[0] == myArray[4] && 
    myArray[0] == myArray[8] &&
    myArray[0] != ""
  ) {
    declareWinner(myArray[0]);
  } else if (
    myArray[2] == myArray[4] &&
    myArray[2] == myArray[6] &&
    myArray[2] != ""
  ) {
    declareWinner(myArray[2]);
  } else if (myArray.length == 9) {
    declareWinner();
  }
}

function declareWinner(winner) {
  if (winner == "x") {
    document.getElementById("turn").innerHTML = "Player X won";
  } else if (winner == "o") {
    document.getElementById("turn").innerHTML = "Player O won";
  } else {
    document.getElementById("turn").innerHTML = "DRAW";
  }
// reset button
const reset = document.querySelector("button");

reset.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
  });
  xTurn = true;
});
