// query selectors

// used for ALL elements
const slots = document.querySelectorAll(".grid-slot");
// used for selecting a single query
const gridSlot = document.querySelector(".grid-slot");
const restartBtn = document.querySelector(".restartBtn");
const statusText = document.querySelector(".statusText");

// Event Listeners

// the below code won't have worked as it only would have picked the first slot instead of all the slots
// gridSlot.addEventListener("click", slotClicked);

// forEach method is used if there are multiple elements with the same classes
slots.forEach((gridSlot) => gridSlot.addEventListener("click", slotClicked));

restartBtn.addEventListener("click", restartGame);

// Variables
let win_conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let current_player = "X";
statusText.innerText = `It's ${current_player}'s turn'`;

// Function

function slotClicked(event) {
  const item = event.target;
  const cellIndex = this.getAttribute("index");

  // only update if slot is empty
  if (item.innerText === "") {
    item.innerText = current_player;

    if (checkWinner_v4(current_player) === true) {
      statusText.innerText = `${current_player} won the match!`;
      statusText.style.color = "green";
    } else {
      changePlayer();
    }
  }
}

function changePlayer() {
  if (current_player === "X") {
    current_player = "O";
  } else {
    current_player = "X";
  }
  statusText.innerText = `Its ${current_player}'s turn'`;
}

function checkWinner_v4(cur_player) {
  let won = false;
  for (let i = 0; i <= 7; i++) {
    // total win_conditions = 8
    let j;
    for (j = 0; j <= 2; j++) {
      if (slots[win_conditions[i][j]].innerText !== cur_player) {
        break; // If the order is not matched, exit the loop
      }
    }
    if (j === 3) {
      won = true; // If the loop was not exited prematurely, it means all symbols matched
      break; // No need to check other win conditions
    }
  }
  return won;
}

function restartGame() {
  slots.forEach((gridSlot) => (gridSlot.innerText = ""));
  current_player = "X";
  statusText.innerText = `It's ${current_player}'s turn'`;
}

function checkWinner_ehh() {
  let won = false;
}



