function stoneGameVII(stones: number[]): number {
    // First calculate prefix sums
    const prefixSums = [0];
    for (let i = 1;i <= stones.length;i++) {
        prefixSums[i] = stones[i - 1] + prefixSums[i - 1];
    }

    // Now calculate optimal diff between 0 and stones.length - 1
    return calculateDiff(0, stones.length - 1, prefixSums, []);
};

const calculateDiff = (start, end, prefixSums, dp) => {
    if (start === end) {
        // if start & end is the same diff would always be 0 as the player would remove the stone and score won't change.
        return 0;
    }

    if (!dp[start]) {
        dp[start] = [];
    }

    if (!dp[start][end]) {
        dp[start][end] = Math.max(
            getSum(start + 1, end, prefixSums) - calculateDiff(start + 1, end, prefixSums, dp),
            getSum(start, end - 1, prefixSums) - calculateDiff(start, end - 1, prefixSums, dp)
        );
    }

    return dp[start][end];
}
const getSum = (start, end, prefixSums) => {
    return prefixSums[end + 1] - prefixSums[start];
}
