const obj = ((doc) => {
  const boardState = new Array(9);

  // cache DOM
  const board = doc.querySelector('#board');
  const cells = doc.querySelectorAll('.cell');

	// event listners
	cells.forEach((cell) => {cell.addEventListener('click', alterCell)});


	function alterCell(event){
		console.log(event)
	}
})(document);
