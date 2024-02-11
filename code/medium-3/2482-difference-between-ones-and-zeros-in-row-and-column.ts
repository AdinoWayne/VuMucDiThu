function onesMinusZeros(grid: number[][]): number[][] {
    var m = grid.length;
    var n = grid[0].length;

    var row = new Uint32Array(m);
    var col = new Uint32Array(n);

    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            row[i] += grid[i][j] * 2;
            col[j] += grid[i][j] * 2;
        }
    }

    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
        grid[i][j] = row[i] + col[j] - m - n;
        }
    }

    return grid;
};
