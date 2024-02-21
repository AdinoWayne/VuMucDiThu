function findMatrix(nums: number[]): number[][] {
    const res = [],
        freq = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i],
            numCount = (freq[n] || 0) + 1
        freq[n] = numCount
        if (!res[numCount - 1]) res[numCount - 1] = [n]
        else res[numCount - 1].push(n)        
    }
    return res
};
