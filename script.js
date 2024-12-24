

const gameBoard = (() => {
    let board = ["empty","empty","empty","empty","empty","empty","empty","empty","empty",]

    const updateGame = (player, location) => {
        if( board[location] == 'empty'){

            board.splice(location, 1, player)
            console.log(board);
        }
    }
    const checkWinCondition = () =>{
        let current = false;

        
        return  current
        
    }
    const checkBoard = (location) => {
        if (board[location] == "empty"){
            return false
        }
        return true
    }

    return {updateGame, checkWinCondition,checkBoard}

})();



function displayController(){
    //display current game based on gameboard object
}

// gameBoard.updateGame("X", 5);

function game(){
    const player1 = (() =>{
        const type = "X";
        const getType =  () => { return type}
        return {
            getType
        }
    })();
    
    const player2 = (() =>{
        const type = "O";
        const getType = () => {return type}
        return{
            getType
        }
    })();
    
    let currentPlayer = player1;

    while (!gameBoard.checkWinCondition()){

        let userInput = prompt("Enter location: ");

        if(!gameBoard.checkBoard(userInput)){ // if false
            gameBoard.updateGame(currentPlayer.getType() , userInput);
        }
        else{
            //if true
            while(gameBoard.checkBoard(userInput)){
                userInput = prompt("Enter Another Location:");
                console.log(userInput)
            }
            gameBoard.updateGame(currentPlayer.getType() , userInput);
        }
        
        console.log(currentPlayer.getType())
        
        
        if(currentPlayer == player1){
            currentPlayer = player2
        }else{
            currentPlayer = player1
        }

    }
   
    
}

const start_btn = document.querySelector(".start-game-btn");

start_btn.addEventListener('click', () =>{
    game();
});













var displayController = (function() {

    var name = "something"

    function sayName(){

    }
    return {
        sayName: sayName
    }
})()


const template = (() => {
    let count = 0;
    const current = () => {return `game score is ${count}.`}
    const increment = () => {count ++}
    const reset = () => {count = 0};

    return {
        current: current,
        increment: increment,
        reset: reset
    }
    
})();

