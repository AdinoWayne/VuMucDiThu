function canBeIncreasing(nums: number[]): boolean {
    let removed = false;

    for (let i = 1; i < nums.length; ++i)
      if (nums[i - 1] >= nums[i]) {
        if (removed)
          return false;
        removed = true;
        if (i > 1 && nums[i - 2] >= nums[i])
          nums[i] = nums[i - 1];
    }
    return true;
};
