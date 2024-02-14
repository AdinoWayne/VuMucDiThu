function maxJump(stones: number[]): number {
    let n = stones.length;

    if (n == 2)
        return stones[1] - stones[0];
    
    let res = stones[1] - stones[0];

    for(let i=2; i<n; i++)
        res = Math.max(res, stones[i] - stones[i-2]);
    
    return res;
};
