((doc) => {
	

  const boardState = new Array(9).fill(undefined);
	const playerState = [
		{turn: 1},
		{name: 'Player 1'},
		{name: 'Player 2'},
		{winner: undefined}
	];

	
	const cells = doc.querySelectorAll('.cell');
	const newGame = doc.querySelector('#new-game');
	const info = doc.querySelector('#info');


	function checkWinCondition(){
		const winningPositions = [    
			[0, 1, 2], [3, 4, 5], [6, 7, 8], 
			[0, 3, 6], [1, 4, 7], [2, 5, 8], 
			[0, 4, 8], [2, 4, 6]
		];
		winningPositions.forEach((pos) => {
			if (boardState[pos[0]] === undefined && 
					boardState[pos[1]] === undefined && 
					boardState[pos[2]] === undefined) {
				return;
			}
			if (boardState[pos[0]] === boardState[pos[1]] && 
					boardState[pos[1]] === boardState[pos[2]]) {
				const mark = boardState[pos[0]];
				if (mark === 'x'){
					playerState[3].winner = 'Player 1';
				} else if (mark === 'o') {
					playerState[3].winner = 'Player 2';
				}
				info.innerText = `${playerState[3].winner} Wins!`;
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
		if (playerState[3].winner !== undefined){
			return;
		}
		const cellIndex = event.target.getAttribute('data-index');
		if (boardState[cellIndex] !== undefined) {
			return;
		}
		let mark;
		if (playerState[0].turn === 1) {
			mark = 'x';
			playerState[0].turn = 2; 
		} else { 
			mark = 'o';
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
		playerState[3].winner = undefined;
		info.innerText = '';
		renderBoard();
	}


	cells.forEach((cell) => {cell.addEventListener('click', alterBoard);});
	newGame.addEventListener('click', clearBoard);


})(document);