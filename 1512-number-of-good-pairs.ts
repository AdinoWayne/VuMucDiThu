function numIdenticalPairs(nums: number[]): number {
    let ans = 0;
    let f = [];
    for (let i = 0; i < nums.length; ++i) {
      if (!f[nums[i]]) {
        f[nums[i]] = 0
      }
      ans = ans + f[nums[i]];
      f[nums[i]]++;
    }

    return ans;
};
