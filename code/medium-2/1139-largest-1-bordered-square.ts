function largest1BorderedSquare(grid: number[][]): number {
  let m = grid.length, n = grid[0].length;
  let top = Array(m).fill(0).map(() => Array(n).fill(0));
  let left = Array(m).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1;
        top[i][j] = i > 0 ? top[i - 1][j] + 1 : 1;
      } 
    }
  }
  
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let size = Math.min(top[i][j], left[i][j]);
      for (let k = size; k > 0; k--) {
        let bottomLeftTop = top[i][j - k + 1];
        let topRightLeft = left[i - k + 1][j];
        if (bottomLeftTop >= k && topRightLeft >= k) {
          ans = Math.max(ans, k * k);
          break;
        }
      }
    }
  }
  return ans;
};
// The time complexity of the function is O(m * n^3) where m is the number of rows and n is the number of columns in the grid.
// The space complexity is O(m * n) because we are using two 2D arrays to store the top and left borders
