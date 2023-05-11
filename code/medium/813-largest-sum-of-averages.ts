function largestSumOfAverages(A: number[], K: number): number {
    const N = A.length;
        
    const sums = new Array(N); // the prefix sum
    sums[0] = A[0]; // initialize the first sum
    
    for (let i = 1; i < N; i++) {
        sums[i] = sums[i - 1] + A[i]; // sums[i] equals the previous sum + A[i]
    }
    
    const dp = Array.from(Array(K), () => Array(N).fill(0)); // Create a 2-D dp array of size K by N.
    dp[0][0] = A[0];
    
    // initialize the condition when we have 0 dividers
    for (let i = 1; i < N; i++) {
        dp[0][i] = sums[i] / (i + 1);
    }

    for (let k = 1; k < K; k++) { // k = the # of dividers we currently have. It is represented as the row of the dp array
        for (let i = k; i < N; i++) { // i = index of the array A. We want to figure out the best position to place the divider for A[0...i].
            
            for (let j = 0; j < i; j++) { // j represents the placement of the divider
                const avgBefore = dp[k - 1][j]; // The best avg. we could have from interval [0, j] when we had 1 less divider than current.
                const avgAfter = (sums[i] - sums[j]) / (i - j); // The avg. of the sums after the placement of the divider (j + 1) up to i.
                
                dp[k][i] = Math.max(dp[k][i], avgBefore + avgAfter);
            }
        }
    }

    return dp[K - 1][N - 1];
};

<!--
Time complexity: O(n3)
Space complexity: O(n2)
-->
