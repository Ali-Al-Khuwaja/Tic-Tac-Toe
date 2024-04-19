// //  keep in mind to use these 1 . closure  2. factory functions 3. module pattern
const state = document.querySelector('.state');
const game = ['/','/','/','/','/','/','/','/','/']; //this has a fixed size.

// create an event listener to the 9 cell i got that can signal if they got clicked using an ID
for (let i = 1; i <= 9; i++) {
  const cell = document.querySelector(`.cell${i}`); // i love this feature
  cell.addEventListener('click', () => {
    ID = i;
    display(ID, cell);
  });
};

// this tries to achieve the same result but it gives me another bigger problem , look like i need to read about forEach later on
// const cell = document.querySelectorAll('.cell');
// let cellID = 0 ;
// problem -> e.g ['x', 'o', 'x', 'o', 'x', 'o', 'x', '/', '/'] , this doesn't work as expected
// cell.forEach(()=>{
//     cell.addEventListener('click' , ()=>{
//         cellID = cellID + 1 ; // 1 then 2 then 3  ...
//         display(cellID,cell);
//     });
// });


// fancy if statement right? , any way this is the power of arguments of functions
let counter = 0 ;
function display(ID, cell) {
  const marker = counter % 2 !== 0 ? 'o' : 'x';
  // i wanted to to compare it with if statements but there is not need for that , remember ali , this is a function 
  game[ID - 1] = marker;
  cell.textContent = marker;
  counter++;
  checkIfWon();
}

function checkIfWon() {
    // Check rows for X
    if (game[0] === 'x' && game[1] === 'x' && game[2] === 'x') {
      state.innerHTML = `X has won`;
    }
    else if (game[3] === 'x' && game[4] === 'x' && game[5] === 'x') {
      state.innerHTML = `X has won`;
    }
    else if (game[6] === 'x' && game[7] === 'x' && game[8] === 'x') {
      state.innerHTML = `X has won`;
    }
  
    // Check rows for O 
    else if (game[0] === 'o' && game[1] === 'o' && game[2] === 'o') {
      state.innerHTML = `O has won`;
    }
    else if (game[3] === 'o' && game[4] === 'o' && game[5] === 'o') {
      state.innerHTML = `O has won`;
    }
    else if (game[6] === 'o' && game[7] === 'o' && game[8] === 'o') {
      state.innerHTML = `O has won`;
    }
  
    // Check columns for X
    if (game[0] === 'x' && game[3] === 'x' && game[6] === 'x') {
      state.innerHTML = `X has won`;
    }
    else if (game[1] === 'x' && game[4] === 'x' && game[7] === 'x') {
      state.innerHTML = `X has won`;
    }
    else if (game[2] === 'x' && game[5] === 'x' && game[8] === 'x') {
      state.innerHTML = `X has won`;
    }
  
    // Check columns for O 
    if (game[0] === 'o' && game[3] === 'o' && game[6] === 'o') {
      state.innerHTML = `O has won`;
    }
    else if (game[1] === 'o' && game[4] === 'o' && game[7] === 'o') {
      state.innerHTML = `O has won`;
    }
    else if (game[2] === 'o' && game[5] === 'o' && game[8] === 'o') {
      state.innerHTML = `O has won`;
    }
  
    // Check diagonals for X
    if (game[0] === 'x' && game[4] === 'x' && game[8] === 'x') {
      state.innerHTML = `X has won`;
    }
    if (game[2] === 'x' && game[4] === 'x' && game[6] === 'x') {
      state.innerHTML = `X has won`;
    }
  
    // Check diagonals for O 
    if (game[0] === 'o' && game[4] === 'o' && game[8] === 'o') {
      state.innerHTML = `O has won`;
    }
    if (game[2] === 'o' && game[4] === 'o' && game[6] === 'o') {
      state.innerHTML = `O has won`;
    }
  }
// I don't understand this , i rather keep my human code than use this ai gen  , i'm only human after all
// function checkIfWon() {
//   const winningCombos = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//     [0, 4, 8], [2, 4, 6] // Diagonals
//   ];

//   for (const combo of winningCombos) {
//     const [a, b, c] = combo;
//     if (game[a] && game[a] === game[b] && game[a] === game[c]) {
//       state.innerHTML = `${game[a].toUpperCase()} has won`;
//       return;
//     }
//   }
// }

  