function maximumDifference(nums: number[]): number {
    let ans = -1;
    let min = nums[0];

    for (let i = 1; i < nums.length; ++i) {
      if (nums[i] > min)
        ans = Math.max(ans, nums[i] - min);
        min = Math.min(min, nums[i]);
    }

    return ans;
};
