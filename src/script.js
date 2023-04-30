((doc) => {
	

  const boardState = new Array(9).fill(undefined);
	const playerState = [
		{turn: 1},
		{name: 'Player 1', marker: 'x'},
		{name: 'Player 2', marker: 'o'}
	];


  const cells = doc.querySelectorAll('.cell');
	const newGame = doc.querySelector('#new-game');


	function checkWinCondition(){
		const winningPositions = [    
			[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    	[0, 3, 6], [1, 4, 7], [2, 5, 8], 
    	[0, 4, 8], [2, 4, 6]
  	];
		winningPositions.forEach((pos) => {
			if (boardState[pos[0]] === undefined && boardState[pos[1]] === undefined && boardState[pos[2]] === undefined) {
				return;
			}
			if (boardState[pos[0]] === boardState[pos[1]] && boardState[pos[1]] === boardState[pos[2]]) {
				console.log('WINNER');
			}
		});
	}


	function renderBoard(){
		for (let i = 0; i < boardState.length; i += 1) {
			if (boardState[i] === 'x') {
				cells[i].innerText = 'X';
			} else if (boardState[i] === 'o') {
				cells[i].innerText = 'O';
			} else {
				cells[i].innerText = '';
			}
		}
	}


	function alterBoard(event){
		const cellIndex = event.target.getAttribute('data-index');
		if (boardState[cellIndex] !== undefined) {
			return;
		}
		let mark;
		if (playerState[0].turn === 1) {
			mark = playerState[1].marker;
			playerState[0].turn = 2; 
		} else { 
			mark = playerState[2].marker;
			playerState[0].turn = 1; 
		}
		boardState[cellIndex] = mark;
		renderBoard();
		checkWinCondition();
	}


	function clearBoard(){
		for (let i = 0; i < boardState.length; i += 1) {
			boardState[i] = undefined;
		}
		playerState[0].turn = 1;
		renderBoard();
	}


	cells.forEach((cell) => {cell.addEventListener('click', alterBoard);});
	newGame.addEventListener('click', clearBoard);


})(document);
