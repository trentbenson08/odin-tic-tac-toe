/* eslint-disable func-names */
const players = (function() {
    function Player(name, mark){
        return {name, mark};
    }
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');

    return {player1, player2};
    
})();

const display = (function() {

    const _display = document.querySelector('#info');


    function alterDisplay(str){
        _display.innerText = str;
    }

    
    return{
        alterDisplay
    };

})();


(function() {

    const _boardState = new Array(9).fill(undefined);
    let _turn = 1;
    let _winner;

    const _cells = document.querySelectorAll('.cell');
	const _newGame = document.querySelector('#new-game');
    const _winningPositions = [    
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];


    function _alterTurn(){
        if (_turn === 1){
            _turn = 2;
        } else { _turn = 1; }
    }


    function _renderBoard(){
        for (let i = 0; i < _boardState.length; i += 1) {
			if (_boardState[i] === players.player1.mark) {
				_cells[i].innerText = players.player1.mark;
			} else if (_boardState[i] === players.player2.mark) {
				_cells[i].innerText = players.player2.mark;
			} else {
				_cells[i].innerText = '';
			}
		}
    }


    function _checkWinCondition(){
        _winningPositions.forEach((pos) => {
			if (_boardState[pos[0]] === undefined && 
					_boardState[pos[1]] === undefined && 
					_boardState[pos[2]] === undefined) {
				return;
			}
			if (_boardState[pos[0]] === _boardState[pos[1]] && 
				_boardState[pos[1]] === _boardState[pos[2]]) {
				
                const mark = _boardState[pos[0]];
				if (mark === players.player1.mark){
					_winner = 'Player 1';
				} else if (mark === players.player2.mark) {
					_winner = 'Player 2';
				}
                display.alterDisplay(`${_winner} Wins!`);
			}
		});
    }


    function _alterBoard(event){
        if(_winner !== undefined){ return; }
        const index = event.target.getAttribute('data-index');
        if(_boardState[index] !== undefined) { return; }
        const mark = _turn === 1 ? players.player1.mark : players.player2.mark;
        _boardState[index] = mark;
        _alterTurn();
        _renderBoard();
        _checkWinCondition();
    }
    _cells.forEach((cell) => {cell.addEventListener('click', _alterBoard);});


    function _clearBoard(){
        for (let i = 0; i < _boardState.length; i += 1) {
			_boardState[i] = undefined;
		}
        _renderBoard();
        display.alterDisplay('');
        _turn = 1;
        _winner = undefined;
    }
    _newGame.addEventListener('click', _clearBoard);

})();