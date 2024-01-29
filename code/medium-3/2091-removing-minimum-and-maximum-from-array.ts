function minimumDeletions(nums: number[]): number {
    let min = Infinity,
    max = -Infinity,
    minIdx = 0,
    maxIdx = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
          min = nums[i];
          minIdx = i;
        }
        if (nums[i] > max) {
          max = nums[i];
          maxIdx = i;
        }
      }
      min = minIdx < maxIdx ? minIdx : maxIdx;
      max = minIdx < maxIdx ? maxIdx : minIdx;
      return Math.min(min + (nums.length - max) + 1, max + 1, nums.length - min);
};
// TC O(n)
// SC O(1)
