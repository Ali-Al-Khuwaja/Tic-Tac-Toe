//  keep in mind to use these 1 . closure  2. factory functions 3. module pattern
// it's not about how nice i code it , i always hit a wall , so i will code it the dumb but working game 


const state = document.querySelector('.state');
const game = ['/','/','/','/','/','/','/','/','/']; //this has a fixed size.
const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');

let cellNumber ;
cell1.addEventListener('click',()=>{
  ID = 1;
  display(ID , cell1);
});
cell2.addEventListener('click',()=>{
  ID = 2;
  display(ID,cell2);
});

cell3.addEventListener('click',()=>{
  ID = 3;
  display(ID,cell3);
});

cell4.addEventListener('click',()=>{
  ID = 4;
  display(ID,cell4);
});

cell5.addEventListener('click',()=>{
  ID = 5;
  display(ID,cell5);
});

cell6.addEventListener('click',()=>{
  ID = 6;
  display(ID,cell6);
});

cell7.addEventListener('click',()=>{
  ID = 7;
  display(ID,cell7);
});

cell8.addEventListener('click',()=>{
  ID = 8;
  display(ID,cell8);
});
cell9.addEventListener('click',()=>{
  ID = 9;
  display(ID,cell9);
});

// this achieves the same results but gives me another bigger problem , the dumb way i kept using above has the advantage 
// let cellID = 0 ;
// cell.forEach((element)=>{
//     element.addEventListener('click' , ()=>{
//         cellID = cellID + 1 ; // 1 then 2 then 3  ...
//         element.id = cellID;
//         display(cellID);
//     });
// });

let counter = 0 ;
function display(ID,cell){
    let marker = 'x';
    let playerChoice = ID ;
    if(counter%2!==0){
        marker = 'o';
    }
    if(playerChoice===1){
        game[0] = marker
        cell.textContent = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===2){
        game[1] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===3){
        game[2] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice==4){
        game[3] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===5){
        game[4] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===6){
        game[5] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===7){
        game[6] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===8){
        game[7] = marker
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }else if (playerChoice===9){
        game[8] = marker
        cell.innerHTML = `${marker} `;
        counter++
        checkIfWon()
    }
};

// function gameModule(){
//     // IIFE module pattern , this one is like a closure but it does remember values 
//     return displayInConsole;
// };

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
  const gameModule = (function () {
    const state = document.querySelector('.state');
    const game = ['/', '/', '/', '/', '/', '/', '/', '/', '/'];
  
    // Private functions for displaying and checking win conditions
    function display(ID, cell) {
      // ... same logic as before ...
    }
  
    function checkIfWon() {
      // ... same logic as before ...
    }
  
    // Public methods exposed by the module
    return {
      handleClick: function(cell, ID) {
        display(ID, cell);
        checkIfWon();
      }
    };
  })();
  