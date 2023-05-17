function new21Game(n: number, k: number, maxPts: number): number {
    if (k+maxPts <= n || k===0) return 1;

    let dp = [];
    dp[0] = 1;
    dp[1] = 1/maxPts;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = 0;
        
        if (i <= k) {
            dp[i] = (1 + 1/maxPts) * dp[i-1];
        } else {
            dp[i] = dp[i-1];
        }
        if (i > maxPts) {
            dp[i] -= dp[i-maxPts-1] / maxPts;
        }
    }
    
    return dp.reduce((acc, cur, idx) => {
        if (idx >= k) {
            acc += cur;
        }
        return acc;
    }, 0)
};
// dp[i] is the probability that we get points i at some moment
// if i <= k, always add 1.1P(i-1) to P(i)
// if i > max, remove 0.1P(i - max - 1) from P(i). This is essentially a sliding window problem:
// P11 = 0.1P10 + 0.1P9 + ... + 0.1P1 = 1.1P10 - 0.1P0
// if i > k, sliding window's right stops growing, meaning always add P(i-1) instead of 1.1P(i-1) to P(i)
// line 21 dp[k] * (n - k)
// Time O(N)
// Space O(N)
