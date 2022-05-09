function minimumDifference(nums: number[], k: number): number {
    let ans = Number.MAX_VALUE;
    nums.sort((a, b) => a - b)
    for (let i = k - 1; i < nums.length; ++i)
      ans = Math.min(ans, nums[i] - nums[i - k + 1]);
    return ans;
};
