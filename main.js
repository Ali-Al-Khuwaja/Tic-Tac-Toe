const tic_tac_toe = (function () {
  // private variables
  let counter = 0;
  // DOM elements
  const state = document.querySelector(".state");
  const game = ["/", "/", "/", "/", "/", "/", "/", "/", "/"]; //this has a fixed size.

  // create an event listener to the 9 cells I got, they can signal if they got clicked using an ID
  for (let i = 1; i <= 9; i++) {
    const cell = document.querySelector(`.cell${i}`); // i love this feature
    cell.addEventListener("click", () => {
      ID = i;
      display(ID, cell);
    });
  }

  function display(ID, cell) {
    const marker = counter % 2 !== 0 ? "o" : "x";
    game[ID - 1] = marker;
    cell.textContent = marker;
    counter++;
    checkIfWon();
  }

  function checkIfWon() {
    // Check rows for X
    if (game[0] === "x" && game[1] === "x" && game[2] === "x") {
      state.innerHTML = `X has won`;
    } else if (game[3] === "x" && game[4] === "x" && game[5] === "x") {
      state.innerHTML = `X has won`;
    } else if (game[6] === "x" && game[7] === "x" && game[8] === "x") {
      state.innerHTML = `X has won`;
    }

    // Check rows for O
    else if (game[0] === "o" && game[1] === "o" && game[2] === "o") {
      state.innerHTML = `O has won`;
    } else if (game[3] === "o" && game[4] === "o" && game[5] === "o") {
      state.innerHTML = `O has won`;
    } else if (game[6] === "o" && game[7] === "o" && game[8] === "o") {
      state.innerHTML = `O has won`;
    }

    // Check columns for X
    if (game[0] === "x" && game[3] === "x" && game[6] === "x") {
      state.innerHTML = `X has won`;
    } else if (game[1] === "x" && game[4] === "x" && game[7] === "x") {
      state.innerHTML = `X has won`;
    } else if (game[2] === "x" && game[5] === "x" && game[8] === "x") {
      state.innerHTML = `X has won`;
    }

    // Check columns for O
    if (game[0] === "o" && game[3] === "o" && game[6] === "o") {
      state.innerHTML = `O has won`;
    } else if (game[1] === "o" && game[4] === "o" && game[7] === "o") {
      state.innerHTML = `O has won`;
    } else if (game[2] === "o" && game[5] === "o" && game[8] === "o") {
      state.innerHTML = `O has won`;
    }

    // Check diagonals for X
    if (game[0] === "x" && game[4] === "x" && game[8] === "x") {
      state.innerHTML = `X has won`;
    }
    if (game[2] === "x" && game[4] === "x" && game[6] === "x") {
      state.innerHTML = `X has won`;
    }

    // Check diagonals for O
    if (game[0] === "o" && game[4] === "o" && game[8] === "o") {
      state.innerHTML = `O has won`;
    }
    if (game[2] === "o" && game[4] === "o" && game[6] === "o") {
      state.innerHTML = `O has won`;
    }
  }
})();
