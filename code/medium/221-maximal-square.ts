function maximalSquare(matrix: string[][]): number {
    const height = matrix.length, width = matrix[0].length;
    const dp = new Array(height + 1).fill(0).map(() => new Array(width + 1).fill(0));
    
    let maxSideLen = 0;
    
    for (let r = 0; r < height; ++r) {
        for (let c = 0; c < width; ++c) {
            if (matrix[r][c] === "1") {
                dp[r + 1][c + 1] = Math.min(dp[r][c], dp[r + 1][c], dp[r][c + 1]) + 1;
                maxSideLen = Math.max(maxSideLen, dp[r + 1][c + 1]);
            }
        }
    }
    
    return maxSideLen * maxSideLen;
};
