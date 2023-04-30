// returns a board object
// allows us to 
const board = (function (){


    const boardState = new Array(9).fill(undefined);


	const _newGame = document.querySelector('#new-game');


    function alterBoard(){

    }
    function _renderBoard(){

    }
    function _checkWinCondition(){

    }
    function _clearBoard(){

    }
    _newGame.addEventListener('click', _clearBoard);

    return{
        boardState,
        alterBoard
    };

})();



// returns a player obj {name, marker}
// contains functions that allow us to mark the board object
function Player(name, mark){

    const playerState = {name, mark};
    const _cells = document.querySelectorAll('.cell');

    function playerIn(){

    }
    _cells.forEach((cell) => {cell.addEventListener('click', playerIn);});

    return{
        playerState,
        playerIn
    };
}

// returns a display obj
// contains functions that allow us to alter the text in the info div
const display = (function(){


    const _display = document.querySelector('#info');


    function alterDisplay(){

    }


    return{
        alterDisplay
    };
})();


/**
 * init board
 * init display
 * init player1
 * init player2
 * 
 * player 1 selects a cell alterBoard is called
 *      board.alterBoard() is called and the boardState array is marked at the specific index from the cell it was selected from
 *          board.render() is called
 *              board.checkWinCondition() is called
 *  player 2 selects a cell alterBoard is called
 *      board.boardState is marked at the specific index from the cell it was selected from
 *          board.render() is called
 *               board.checkWinCondition() is called
 */