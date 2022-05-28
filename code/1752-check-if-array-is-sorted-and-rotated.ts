function check(nums: number[]): boolean {
    const n = nums.length;
    let rotates = 0;

    for (let i = 0; i < n; ++i)
      if (nums[i] > nums[(i + 1) % n] && ++rotates > 1)
        return false;

    return true;
};
