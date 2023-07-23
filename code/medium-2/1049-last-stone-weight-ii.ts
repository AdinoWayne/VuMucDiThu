function lastStoneWeightII(stones: number[]): number {
    const memo = new Map();
    return findMinWeight(0, 0, 0);
    
    function findMinWeight(index, weight1, weight2) {
        const key = `${index}#${weight1}#${weight2}`;
        
        // base case
        if (index == stones.length) return Math.abs(weight1 - weight2);
        if (memo.has(key)) return memo.get(key);
        
        const currWeight = stones[index];
        const min =  Math.min(
            findMinWeight(index + 1, weight1 + currWeight, weight2), 
            findMinWeight(index + 1, weight1, weight2 + currWeight
        ));
        
        memo.set(key, min);
        return min;
    }
};
// TC O(n2)
// SC O(n2)
