function getMaxLen(nums: number[]): number {
  let max = 0, pos = 0, neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      [pos, neg] = [0, 0];
    } else if (nums[i] < 0) {
      [pos, neg] = [neg > 0 ? neg+1 : 0, pos+1];
    } else {
      [pos, neg] = [pos+1, neg > 0 ? neg+1 : 0];
    }
    max = Math.max(max, pos);
  }
  return max;
};
// TC O(n)
// SC O(1)
