
const obj = ((doc) => {
	

  const boardState = new Array(9);
	const playerState = [
		{turn: 1},
		{name: 'Player 1', marker: 'x'},
		{name: 'Player 2', marker: 'o'}
	]

  // cache DOM
  const board = doc.querySelector('#board');
  const cells = doc.querySelectorAll('.cell');


	function renderBoard(){
		console.log(boardState)
	}




	function alterCell(event){
		const cellIndex = event.target.getAttribute('data-index');
		if (boardState[cellIndex] !== undefined){
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
	}





	// event listners
	cells.forEach((cell) => {cell.addEventListener('click', alterCell)});
})(document);
