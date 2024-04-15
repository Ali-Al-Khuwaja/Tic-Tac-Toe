// // first i need to render a 3 x 3 array and i want them to be be able to display all of it's values 
// // keep in mind to use these 1 . closure  2. factory functions 3. module pattern

// const gameModule = (()=>{
//     // IIFE module pattern , this one is like a closure but it does remember values 
//     const game = ['/','/','/','/','/','/','/','/','/']; //this has a fixed size.
//     let counter = 0 ;
//     function checkIfWon(){
//         // here is every combo that can be used to win in this game , hey , as long as it works why should we care and over engineer it ? 
//         if(game[0]==='x' && game[1]==='x' && game[2]==='x'){
//             console.log('x has won');
//         }
//         else if (game[3]==='x' && game[4]==='x' && game[5]==='x'){
//             console.log('x has won');
//         }
//         else if (game[6]==='x' && game[7]==='x' && game[8]==='x'){
//             console.log('x has won');
//         }
//         else if (game[0]==='x' && game[4]==='x' && game[8]==='x'){
//             console.log('x has won');
//         }
//         else if (game[2]==='x' && game[4]==='x' && game[6]==='x'){
//             console.log('x has won');
//         }
//         else if(game[0]==='o' && game[1]==='o' && game[2]==='o'){
//             console.log('o has won');
//         }
//         else if (game[3]==='o' && game[4]==='o' && game[5]==='o'){
//             console.log('o has won');
//         }
//         else if (game[6]==='o' && game[7]==='o' && game[8]==='o'){
//             console.log('o has won');
//         }
//         else if (game[0]==='o' && game[4]==='o' && game[8]==='o'){
//             console.log('o has won');
//         }
//         else if (game[2]==='o' && game[4]==='o' && game[6]==='o'){
//             console.log('o has won');
//         }
    
//     }
//     const displayInConsole = () => {
//         const playerChoice = prompt('what is your choice ?');
//         console.log(playerChoice);
//         let marker = 'x';
//         if(counter%2!==0){
//             marker = 'o';
//         }
//         if(playerChoice==='1'){
//             console.clear();
//             game[0] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='2'){
//             console.clear();
//             game[1] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='3'){
//             console.clear();
//             game[2] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice=='4'){
//             console.clear();
//             game[3] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='5'){
//             console.clear();
//             game[4] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='6'){
//             console.clear();
//             game[5] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='7'){
//             console.clear();
//             game[6] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='8'){
//             console.clear();
//             game[7] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else if (playerChoice==='9'){
//             console.clear();
//             game[8] = marker
//             console.log(game[0],'|',game[1],'|',game[2],'\n',game[3],'|',game[4],'|',game[5],'\n',game[6],'|',game[7],'|',game[8]);
//             counter++
//             checkIfWon()
//         }else{
//             console.log('pick from 1 to 9 please');
//         };
//     }
//     return displayInConsole;

// })();

function start(){
    for(let i=0;8>i;i++){
        alert('YOU ARE X');
        const play = gameModule;
        play();
    };
};

