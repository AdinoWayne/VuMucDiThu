function validTicTacToe(board: string[]): boolean {
	const row = [0, 0, 0];
	const col = [0, 0, 0];
	let [step, forwardSlash, backwardSlash] = [0, 0, 0];

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const current = board[i][j];
			if (current === ' ') continue;
			const isX = current === 'X';

			row[i] += isX ? 1 : -1;
			col[j] += isX ? 1 : -1;
			step += isX ? 1 : -1;
			if (i === j) forwardSlash += isX ? 1 : -1;
			if (i + j === 2) backwardSlash += isX ? 1 : -1;
		}
	}

	if (step < 0 || step > 1) return false;
	const checkWin = (count) => row.some(num => num === count) || 
		  col.some(num => num === count) ||
		  forwardSlash === count || 
		  backwardSlash === count;
	const isXWin = checkWin(3);
	const isOWin = checkWin(-3);
	if ((isXWin && step !== 1) || (isOWin && step !== 0)) return false;
	return true;
};
