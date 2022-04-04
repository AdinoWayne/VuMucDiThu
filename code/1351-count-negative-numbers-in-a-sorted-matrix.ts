function countNegatives(grid: number[][]): number {
    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;
    let r = m - 1;
    let c = 0;
    while (r >= 0 && c < n) {
      if (grid[r][c] < 0) {
        ans += n - c;
        --r;
      } else {
        ++c;
      }
    }
    return ans;
};
