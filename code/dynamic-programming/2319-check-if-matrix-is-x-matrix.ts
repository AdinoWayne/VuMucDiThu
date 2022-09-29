function checkXMatrix(grid: number[][]): boolean {
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid.length; j += 1) {
            const isDiagonal = i === j || i + j === grid.length - 1;

            if ((isDiagonal && grid[i][j] === 0) || (!isDiagonal && grid[i][j] !== 0)) {
                return false;
            }
        }
    }
    
    return true;
};
