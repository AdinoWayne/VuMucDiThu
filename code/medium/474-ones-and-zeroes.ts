function findMaxForm(strs: string[], m: number, n: number): number {
  const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))
  for (let i = 0; i < strs.length; i++) {
    const { zero, one } = getZeroOne(strs[i])
    for (let j = n; j >= one; j--) {
      for (let k = m; k >= zero; k--) {
        dp[j][k] = Math.max(dp[j - one][k-zero]+ 1, dp[j][k])
      }
    }
  }
  return dp[n][m]
};

/**
 *
 * @param {string} str
 */
const getZeroOne = (str) => {
  const { length } = str
  const zero = str.replace(/1/g, '').length
  return {
    zero,
    one: length - zero
  }
}
