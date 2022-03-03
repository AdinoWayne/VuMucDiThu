function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let count = 0;
    const n = nums.length;
    for (let i=0;i<n;i++) {
        if (nums[i] === 1) {
            count += 1;
            max = Math.max(count, max);
        } else if (nums[i] !== 1) {
            count = 0;
        }
    }
    return max;
};
