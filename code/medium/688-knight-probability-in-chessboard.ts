function knightProbability(n: number, k: number, r: number, c: number): number {
    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    const memo = new Map();
    
    return findProbs(k, r, c);
    
    function findProbs(k, r, c) {
        const key = `${k}#${r}#${c}`;
        
        // base case
        if (isOutOfBound(r, c)) return 0.0; // .0 is for completeness sake. Don't really need it in JavaScript
        if (k === 0) return 1.0;
        if (memo.has(key)) return memo.get(key);
        
        let prob = 0;
        
        for (const [dirX, dirY] of dirs) {
            prob += 0.125 * findProbs(k - 1, r + dirX, c + dirY);
        }
        
        memo.set(key, prob);
        
        return prob;
        
    }
    
    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row >= n || col >= n;
    }
};
// Time complexity is O(kn^2), where n is the board size and k is the number of moves
// Space complexity is also O(kn^2)
