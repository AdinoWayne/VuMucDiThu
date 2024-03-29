function smallestDivisor(nums: number[], threshold: number): number {
  // Use 10e6 as the max
  let left = 1, right = 10e6;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
      sum += Math.ceil(nums[i] / mid);
    }
    sum > threshold ? (left = mid + 1) : (right = mid);
  }
  return left;
};
// TC O(nlogn)
// SC O(1)
