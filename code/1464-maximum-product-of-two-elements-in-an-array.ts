function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let len = nums.length - 1;
  return (nums[len] - 1) * (nums[len - 1] - 1);
};
