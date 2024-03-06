function minimumMoves(grid: number[][]): number {
    let memo = new Map();
    // Collect the cells which have 0 stones
    // Collect the cells which have more than 1 stone
    let extraStoneCellsArr = [], zeroStoneCellsArr = [];

    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[r].length; c++) {
            if (grid[r][c] > 1) {
                extraStoneCellsArr.push([r, c, grid[r][c]]);
            }
            if (grid[r][c] === 0) {
                zeroStoneCellsArr.push([r, c]);
            }
        }
    };

    // Get minimum # of moves
    // horizontally and vertically by calculating the 
    // distance between the cells

    const calculateMinMoves = (index, extras) => {
        // Base case
        if (index >= zeroStoneCellsArr.length) return 0;

        let memoKey = index + '-' + extras;

        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }
        
        // iterate over extra stones array to calcuate
        // minimum number of moves
        let min = Number.MAX_SAFE_INTEGER;
        let [rowZero, colZero] =  zeroStoneCellsArr[index];

        for (let j=0; j<extraStoneCellsArr.length; j++) {
            if (extraStoneCellsArr[j][2] > 1) {
                // decrement the count of cell which has 
                // more than 1 stone
                extraStoneCellsArr[j][2] -= 1;
                // calculate moves and backtack
                const moves = Math.abs(extraStoneCellsArr[j][0] - rowZero) + Math.abs(extraStoneCellsArr[j][1] - colZero) 
                            + calculateMinMoves(index + 1, extraStoneCellsArr);
                min = Math.min(min, moves);
                extraStoneCellsArr[j][2] += 1;
            }
        }
        memo.set(memoKey, min);
        return min;
    }

    return calculateMinMoves(0, extraStoneCellsArr)
};
