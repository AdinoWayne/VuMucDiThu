function maxAscendingSum(nums: number[]): number {
    let ans = 0;
    for (let i = 0, s = 0; i < nums.length; ++i) {
      if (i && nums[i] <= nums[i - 1])
        s = 0;
      ans = Math.max(ans, s += nums[i]);
    }
    return ans;
};
