function minScoreTriangulation(values: number[]): number {
  let n = values.length;
  let dp = new Array(n).fill(-1).map(() => Array(n).fill(-1));
  return solveMem(values, 0, n - 1, dp);
};

function solveMem(value, i, j, dp) {
  // base case
  if (i + 1 === j) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  let ans = Number.MAX_VALUE;
  for (let k = i + 1; k < j; k++) {
    ans = Math.min(
      ans,
      value[i] * value[j] * value[k] +
        solveMem(value, i, k, dp) +
        solveMem(value, k, j, dp)
    );
  }
  dp[i][j] = ans;
  return dp[i][j];
}
// Time Complexity: O(N^3)
// Space Complexity: O(N^2)
