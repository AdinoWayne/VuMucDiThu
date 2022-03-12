function smallestRangeI(nums: number[], k: number): number {
    const sort = nums.sort((a, b) => a - b)
    return Math.max(sort[nums.length - 1] - nums[0] - 2*k, 0)
};
