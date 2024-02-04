function maxSum(grid: number[][]): number {
    let max = 0
	
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            let hourglassSum = 0
            hourglassSum += grid[i][j - 1]
            hourglassSum += grid[i][j]
            hourglassSum += grid[i][j + 1]
            hourglassSum += grid[i + 1][j]
            hourglassSum += grid[i + 2][j - 1]
            hourglassSum += grid[i + 2][j]
            hourglassSum += grid[i + 2][j + 1]
            if(hourglassSum > max) max = hourglassSum
        }
    }

    return max
};
