(function () {
  const GameModule = (function () {
    // Private Variable
    let game_board = Array(9).fill("");
    let counter = 0;

    // returns a copy instead of reference
    const getBoard = () => [...game_board];

    function drawMark(ID, cell) {
      const marker = counter % 2 !== 0 ? "o" : "x";
      game_board[ID - 1] = marker; // Because arrays start from 0 .
      cell.textContent = marker;
      counter++;
      DOM.checkIfWon();
    }

    function reset() {
      game_board = Array(9).fill("");
      counter = 0;
    }
    return {
      getBoard,
      drawMark,
      reset,
    };
  })();

  const DOM = (function () {
    // DOM elements
    const state = document.querySelector(".state");
    // create an event listener to the 9 cells I got, they can signal if they got clicked using an ID
    for (let i = 1; i <= 9; i++) {
      const cell = document.querySelector(`.cell${i}`); // i love this feature
      cell.addEventListener("click", () => {
        let id = i;
        GameModule.drawMark(id, cell);
      });
    }
    function checkIfWon() {
      // Check rows for X
      let game_board = GameModule.getBoard();

      if (
        game_board[0] === "x" &&
        game_board[1] === "x" &&
        game_board[2] === "x"
      ) {
        state.innerHTML = `X has won`;
      } else if (
        game_board[3] === "x" &&
        game_board[4] === "x" &&
        game_board[5] === "x"
      ) {
        state.innerHTML = `X has won`;
      } else if (
        game_board[6] === "x" &&
        game_board[7] === "x" &&
        game_board[8] === "x"
      ) {
        state.innerHTML = `X has won`;
      }

      // Check rows for O
      else if (
        game_board[0] === "o" &&
        game_board[1] === "o" &&
        game_board[2] === "o"
      ) {
        state.innerHTML = `O has won`;
      } else if (
        game_board[3] === "o" &&
        game_board[4] === "o" &&
        game_board[5] === "o"
      ) {
        state.innerHTML = `O has won`;
      } else if (
        game_board[6] === "o" &&
        game_board[7] === "o" &&
        game_board[8] === "o"
      ) {
        state.innerHTML = `O has won`;
      }

      // Check columns for X
      if (
        game_board[0] === "x" &&
        game_board[3] === "x" &&
        game_board[6] === "x"
      ) {
        state.innerHTML = `X has won`;
      } else if (
        game_board[1] === "x" &&
        game_board[4] === "x" &&
        game_board[7] === "x"
      ) {
        state.innerHTML = `X has won`;
      } else if (
        game_board[2] === "x" &&
        game_board[5] === "x" &&
        game_board[8] === "x"
      ) {
        state.innerHTML = `X has won`;
      }

      // Check columns for O
      if (
        game_board[0] === "o" &&
        game_board[3] === "o" &&
        game_board[6] === "o"
      ) {
        state.innerHTML = `O has won`;
      } else if (
        game_board[1] === "o" &&
        game_board[4] === "o" &&
        game_board[7] === "o"
      ) {
        state.innerHTML = `O has won`;
      } else if (
        game_board[2] === "o" &&
        game_board[5] === "o" &&
        game_board[8] === "o"
      ) {
        state.innerHTML = `O has won`;
      }

      // Check diagonals for X
      if (
        game_board[0] === "x" &&
        game_board[4] === "x" &&
        game_board[8] === "x"
      ) {
        state.innerHTML = `X has won`;
      }
      if (
        game_board[2] === "x" &&
        game_board[4] === "x" &&
        game_board[6] === "x"
      ) {
        state.innerHTML = `X has won`;
      }

      // Check diagonals for O
      if (
        game_board[0] === "o" &&
        game_board[4] === "o" &&
        game_board[8] === "o"
      ) {
        state.innerHTML = `O has won`;
      }
      if (
        game_board[2] === "o" &&
        game_board[4] === "o" &&
        game_board[6] === "o"
      ) {
        state.innerHTML = `O has won`;
      }
    }
    return {
      state,
      checkIfWon,
    };
  })();
})();
