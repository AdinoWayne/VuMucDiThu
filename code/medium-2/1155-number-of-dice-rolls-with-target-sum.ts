function numRollsToTarget(n: number, f: number, target: number): number {
    const MOD = 1e9 + 7;
    const memo = new Map();
	
    return findWays(n, 0);
    
    function findWays(k, sum) {
        const key = `${k}#${sum}`;
        
        // base case
        if (k == 0) return sum == target ? 1: 0;
        if (sum > target) return 0;
        if (memo.has(key)) return memo.get(key);
        
        let count = 0;
        
        for (let face = 1; face <= Math.min(f, target); face++) {
            count = (count + findWays(k - 1, sum + face)) % MOD;
        }
        
        memo.set(key, count);
        return count;
    }
};
