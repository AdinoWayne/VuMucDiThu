function maxIncreaseKeepingSkyline(grid: number[][]): number {
    let result = 0, n = grid.length;
    let rMax = new Array(grid.length).fill(0);
    let cMax = new Array(grid.length).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rMax[i] = Math.max(rMax[i], grid[i][j]);
            cMax[j] = Math.max(cMax[j], grid[i][j]);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += Math.min(rMax[i], cMax[j]) - grid[i][j];
        }
    }
    return result;
};
