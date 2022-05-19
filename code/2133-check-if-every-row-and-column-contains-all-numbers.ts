function checkValid(matrix: number[][]): boolean {
    const n = matrix.length;

    for (let i = 0; i < n; ++i) {
      let row = {};
      let col = {};
      for (let j = 0; j < n; ++j) {
        row[matrix[i][j]] = true;
        col[matrix[j][i]] = true;
      }
      if (Math.min(Object.keys(row).length, Object.keys(col).length) < n)
        return false;
    }

    return true;
};
