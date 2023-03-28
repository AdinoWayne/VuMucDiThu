function minSteps(n: number): number {
    const dp = new Array(n + 1).fill(0);
    
    dp[0] = 0;
    dp[1] = 0;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = Math.floor(i / 2); j > 1; j--) {
            // if sequence of length 'j' can be pasted multiple times to get length 'i' sequence
            if (i % j === 0) {
                 // we just need to paste sequence j (i/j - 1) times, hence additional (i/j) times since we need to copy it first as well.
                // we don't need checking any smaller length sequences 
                dp[i] = dp[j] + (i / j);
                break;
            }
        }
    }

    return dp[n];
};
