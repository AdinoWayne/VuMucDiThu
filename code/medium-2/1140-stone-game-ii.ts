function stoneGameII(piles: number[]): number {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);
	
    sums[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i]; // (1)
    }
    
    return findMax(0, 1);
    
    function findMax(index, M) { // (2)
        const key = `${index}#${M}`;
        
        // base case
        if (n - index <= 2 * M) return sums[index]; // (3)
        if (memo.has(key)) return memo.get(key);
        
        let res = Number.MIN_SAFE_INTEGER;
        
        for (let x = 1; x <= 2 * M; x++) { // (4)
            const newM = Math.max(x, M); // (5)
            res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
        }
        
        memo.set(key, res);
        return res;
    }
};
// dp[i, m] = maximum stones the current player can get from piles[i:] with M=m
// sums[i]= total stones of piles[i:]
// when current player pick stones from i to i+x-1
// -> the other player's stones: dp[i+x, max(m, x)]
// -> total stones of current player: sums[i] - dp[i+x, max(m, x)]
// we want the current player gets maximum means the other player gets minimum
// Time complexity: O(n^3)
// Space complexity: O(n^2)
