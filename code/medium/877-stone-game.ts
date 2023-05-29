function stoneGame(piles: number[]): boolean {
    const n = piles.length;
    
    const memo = [];
    
    for (let i = 0; i < n; i++) {
        memo[i] = [];
    }
    
    return topDown(0, n - 1) > 0;
    
    function topDown(start, end) {
        if (start == end) return piles[start];
        if (memo[start][end]) return memo[start][end];
        
        const startPick = piles[start] - topDown(start + 1, end);
        const endPick = piles[end] - topDown(start, end - 1);
        
        const res = Math.max(startPick, endPick);
        
        memo[start][end] = res;
        
        return res;
    }
};

// Time complexity: O(2^n)
// space complexity: O(n^2)
