function PredictTheWinner(nums: number[]): boolean {
    const n = nums.length;
    const dp = [];
    
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0);
        dp[i][i] = nums[i];
    }
    
    for (let len = 2; len <= n; len++) {
        for (let start = 0; start < n - len + 1; start++) {
            const end = start + len - 1;
            dp[start][end] = Math.max(nums[start] - dp[start + 1][end], nums[end] - dp[start][end - 1]);
        }
    }
    
    return dp[0][n - 1] >= 0;
};
// The time complexity of the PredictTheWinner function is O(n^2),
// where n is the length of the input nums array. The space complexity is also O(n^2),
// because the function uses a two-dimensional array dp of size n x n to store the computed values.
