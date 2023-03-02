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

// This is a dynamic programming solution to the "Ones and Zeroes" problem.
// The function findMaxForm takes in an array of strings strs, and two integers m and n,
//   and returns the maximum number of strings that can be formed with m zeros and n ones.

// The function initializes a two-dimensional dp array with m+1 rows and n+1 columns,
// where dp[i][j] represents the maximum number of strings that can be formed with i zeros and j ones.

// Then, for each string in strs, the function gets the number of zeros and ones in the string using the helper function getZeroOne,
// and updates the dp array using a nested loop. Specifically, it iterates over all possible combinations of zeros and ones,
// and sets the current dp value to the maximum of the current value and the value obtained by adding the current string to the combination that leaves enough zeros and ones for the remaining strings.

// Finally, the function returns the dp[n][m] value, which represents the maximum number of strings that can be formed with m zeros and n ones.

// The time complexity of this function is O(kLmn), where k is the length of strs, L is the average length of the strings in strs,
// m is the number of zeros, and n is the number of ones. The space complexity is also O(mn), since the dp array has m+1 rows and n+1 columns.
