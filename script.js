

const gameBoard = (() => {
    let board = ["empty","empty","empty","empty","empty","empty","empty","empty","empty",]

    const updateGame = (player, location) => {
        if( board[location] == 'empty'){

            board.splice(location, 1, player)
            console.log(board);
        }
    }
    const checkWinCondition = () =>{
        //using a algorithm
        // Depth first search
        //have a list that has all "X" 
        //when already access an "x" put it in a dictionary / Hashmap
        //at a "X" go as deep as we can, if we hit 3 cells we then declare a winner
        let current = 'active';
        const cellOne = board[0];
        const cellTwo = board[1];
        const cellThree = board[2];
        const cellFour = board[3];
        const cellFive = board[4];
        const cellSix = board[5];
        const cellSeven = board[6];
        const cellEight = board[7];
        const cellNine = board[8];
        // three rows

        if(
            (cellOne == 'X' && cellTwo == 'X' && cellThree == 'X') ||
            (cellFour == 'X' && cellFive == 'X' && cellSix == 'X') ||
            (cellSeven == 'X' && cellEight == 'X' && cellNine == 'X') ||
            (cellTwo == 'X' && cellSix == 'X' && cellNine == 'X') ||
            (cellThree == 'X' && cellFive == 'X' && cellEight == 'X') ||
            (cellOne == 'X' && cellFour == 'X' && cellSeven == 'X') ||
            (cellOne == 'X' && cellFive == 'X' && cellNine == 'X') ||
            (cellThree == 'X' && cellFive == 'X' && cellSeven == 'X')
        ){
            return 'p1'
        }
        if(
            (cellOne == 'O' && cellTwo == 'O' && cellThree == 'O') ||
            (cellFour == 'O' && cellFive == 'O' && cellSix == 'O') ||
            (cellSeven == 'O' && cellEight == 'O' && cellNine == 'O') ||
            (cellTwo == 'O' && cellSix == 'O' && cellNine == 'O') ||
            (cellThree == 'O' && cellFive == 'O' && cellEight == 'O') ||
            (cellOne == 'O' && cellFour == 'O' && cellSeven == 'O') ||
            (cellOne == 'O' && cellFive == 'O' && cellNine == 'O') ||
            (cellThree == 'O' && cellFive == 'O' && cellSeven == 'O')
        ){
            return 'p2'
        }

        if(!board.includes("empty")){
            return 'Tied'
        }
        

        return current;
        
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
        const map1 = new Map();
        const getType =  () => { return type}
        const getMap = () => {return map1}
        const appendToMap = (value) =>{
            map1.set(value, 0);
        }
        return {
            getType,
            getMap,
            appendToMap
        }
    })();
    
    const player2 = (() =>{
        const type = "O";
        const map1 = new Map();
        const getType = () => {return type}
        const getMap = () => {return map1}
        const appendToMap = (value) =>{
            map1.set(value, 0);
        }
        return{
            getType,
            getMap,
            appendToMap
        }
    })();
    
    let currentPlayer = player1;
    
    while (gameBoard.checkWinCondition() == 'active'){

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
        currentPlayer.appendToMap(userInput);
        console.log("-------------------------")
        console.log(currentPlayer.getMap());
        console.log("-------------------------")
        
        if(currentPlayer == player1){
            currentPlayer = player2
        }else{
            currentPlayer = player1
        }

    }
    let outcome = gameBoard.checkWinCondition();
    console.log(outcome);
    if(outcome == 'p1'){
        //player 1 won
        console.log('p1 win')
    }
    else if (outcome == 'p2'){
        //player 2 won
        console.log('p2 win')
    }
    else{
        //Tied
        console.log('Tied')
    }
    console.log("game done")
   
    
}

const start_btn = document.querySelector(".start-game-btn");

start_btn.addEventListener('click', () =>{
    game();
});

