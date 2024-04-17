//  keep in mind to use these 1 . closure  2. factory functions 3. module pattern

//Add event listeners to each node and a unique ID that can be used to know on what cell to draw using display()
// each cell has it's own eventListener function that contains a unique ID
const game = ['/','/','/','/','/','/','/','/','/']; //this has a fixed size.
const cell = document.querySelectorAll('.cell');
let cellID = 0 ;
cell.forEach((element)=>{
    element.addEventListener('click' , ()=>{
        cellID = cellID + 1 ; // 1 then 2 then 3  ...
        element.id = cellID;
        display(cellID);
    });
});
// use the ID to draw an X on that cell that share the same ID in the array

let counter = 0 ;
function display(ID){
    let cell = document.getElementById(ID);
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
        cell.innerHTML = `${marker}`;
        counter++
        checkIfWon()
    }
};

// function gameModule(){
//     // IIFE module pattern , this one is like a closure but it does remember values 
//     return displayInConsole;
// };

function checkIfWon(){
    // here is every combo that can be used to win in this game , hey , as long as it works why should we care and over engineer it ? 
    if(game[0]==='x' && game[1]==='x' && game[2]==='x'){
        console.log('x has won');
    }
    else if (game[3]==='x' && game[4]==='x' && game[5]==='x'){
        console.log('x has won');
    }
    else if (game[6]==='x' && game[7]==='x' && game[8]==='x'){
        console.log('x has won');
    }
    else if (game[0]==='x' && game[4]==='x' && game[8]==='x'){
        console.log('x has won');
    }
    else if (game[2]==='x' && game[4]==='x' && game[6]==='x'){
        console.log('x has won');
    }
    else if(game[0]==='o' && game[1]==='o' && game[2]==='o'){
        console.log('o has won');
    }
    else if (game[3]==='o' && game[4]==='o' && game[5]==='o'){
        console.log('o has won');
    }
    else if (game[6]==='o' && game[7]==='o' && game[8]==='o'){
        console.log('o has won');
    }
    else if (game[0]==='o' && game[4]==='o' && game[8]==='o'){
        console.log('o has won');
    }
    else if (game[2]==='o' && game[4]==='o' && game[6]==='o'){
        console.log('o has won');
    }

}