function minFallingPathSum(matrix: number[][]): number {
    let minSum = Infinity;
    let n = matrix.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [...matrix[i]];
    }
    let helper = function(i,j) {
        if (i == n || j == n || i < 0 || j < 0) return Infinity;
        if (i == n-1) return matrix[i][j];
        if (dp[i][j] != matrix[i][j]) return dp[i][j];

        dp[i][j] += Math.min(helper(i+1, j-1), Math.min(helper(i+1, j), helper(i+1, j+1)))
        return dp[i][j];
    }
    for (let i = 0; i < matrix.length; i++) {
        helper(0,i);
        minSum = Math.min(minSum, dp[0][i])
    }
    return minSum;
};

// TC O(n2)
// SC O(n)
