function countHillValley(nums: number[]): number {
    let ans = 0;
    let left = nums[0];

    for (let i = 1; i + 1 < nums.length; ++i)
      if (left < nums[i] && nums[i] > nums[i + 1] ||  // hill
          left > nums[i] && nums[i] < nums[i + 1]) {  // valley
        ++ans;
        left = nums[i];
      }

    return ans;
};
