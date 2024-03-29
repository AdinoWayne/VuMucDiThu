function maxUncrossedLines(A: number[], B: number[]): number {
    const m = A.length;
    const n = B.length;
    
    const dp = new Array(m + 1);
    
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[m][n];
};
// dpTable[i][j]: Represents the maximum number of uncrossed lines that can be drawn between the first i elements of array A and the first j elements of array B.
// TC O(n2)
// SC O(n2)
