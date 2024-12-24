


const gameBoard = (() => {
    let board = ["empty","empty","empty","empty","empty","empty","empty","empty","empty",]
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

    const switchPlayer = (player) =>{
        if(player == player1){
            currentPlayer = player2
        }else {currentPlayer = player1}
    }
    const player = () =>{
        return currentPlayer;
    }
    const updateGame = (player, location) => {
        if( board[location] == 'empty'){

            board.splice(location, 1, player)
            //console.log(board);
        }
    }
    const checkWinCondition = () =>{
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

        if(
            //Three Rows
            (cellOne == 'X' && cellTwo == 'X' && cellThree == 'X') ||
            (cellFour == 'X' && cellFive == 'X' && cellSix == 'X') ||
            (cellSeven == 'X' && cellEight == 'X' && cellNine == 'X') ||
            //Three Columns
            (cellOne == 'X' && cellFour == 'X' && cellSeven == 'X') ||
            (cellTwo == 'X' && cellFive == 'X' && cellEight == 'X') ||
            (cellThree == 'X' && cellSix == 'X' && cellNine == 'X') ||
            //Diagonal Outcomes
            (cellOne == 'X' && cellFive == 'X' && cellNine == 'X') ||
            (cellThree == 'X' && cellFive == 'X' && cellSeven == 'X')
        ){
            return 'p1'
        }
        if(
            //Three ROWS
            (cellOne == 'O' && cellTwo == 'O' && cellThree == 'O') ||
            (cellFour == 'O' && cellFive == 'O' && cellSix == 'O') ||
            (cellSeven == 'O' && cellEight == 'O' && cellNine == 'O') ||
            //Three Columns
            (cellOne == 'O' && cellFour == 'O' && cellSeven == 'O') ||
            (cellTwo == 'O' && cellFive == 'O' && cellEight == 'O') ||
            (cellThree == 'O' && cellSix == 'O' && cellNine == 'O') ||
            //Diagonal Outcomes
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

    return {updateGame, checkWinCondition,checkBoard, switchPlayer, player}

})();


function gameController(outcome){
    const body = document.body;
    const header = document.querySelector('.header');
    const article = document.querySelector('.article');
    const footer = document.querySelector('.footer');

    header.style.display = 'none';
    article.style.display = 'none';
    footer.style.display = 'none';

    const outcome_display = document.createElement('div');

    const refresh_btn = document.createElement('button');
    refresh_btn.classList.add('btn');
    refresh_btn.textContent = "Click to restart";
    refresh_btn.addEventListener('click', () =>{
        location.reload();
    });

    body.appendChild(outcome_display);
    body.appendChild(refresh_btn);
    body.style.width = "100vw";
    body.style.height ="100vh"
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';


    if(outcome == 'p1'){
        //player 1 won
       //console.log('p1 win')
        outcome_display.textContent = 'Player 1 Is The Winner';
    }
    else if (outcome == 'p2'){
        //player 2 won
       // console.log('p2 win')
        outcome_display.textContent = 'Player 2 Is The Winner';
    }
    else{
        //Tied
        //console.log('Tied')
        outcome_display.textContent = 'Game Ended In a Tie';
    }
   // console.log("game done")

}


function game(userInput, cell){
    
    let currentPlayer = gameBoard.player();
    

    if (currentPlayer.getType() == 'X'){
        cell.textContent = 'X'
    }else{cell.textContent = 'O'}

    if (gameBoard.checkWinCondition() == 'active'){

        gameBoard.updateGame(currentPlayer.getType() , userInput);
        
        
        // console.log(currentPlayer.getType())
        // currentPlayer.appendToMap(userInput);
        // console.log("-------------------------")
        // console.log(currentPlayer.getMap());
        // console.log("-------------------------")
        
        gameBoard.switchPlayer(currentPlayer);
    }

    let outcome = gameBoard.checkWinCondition();

    if(outcome != 'active'){
        gameController(outcome);
    }
    
}
// Grid buttons

const grid_area = document.querySelector('.article')

for(let i = 0; i < 9;i++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('click', () =>{
        if(!gameBoard.checkBoard(i)){
            game(i, cell);
        }
    })

    grid_area.appendChild(cell)
}
