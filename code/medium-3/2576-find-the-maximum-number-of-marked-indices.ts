function maxNumOfMarkedIndices(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b); // sort the array in non-decreasing order
  let st = 0;
  let mid = Math.floor((n + 1) / 2);
  while (mid < n) {
    if (nums[st] * 2 <= nums[mid]) {
      st++;
    }
    mid++;
  }
  return st * 2; 
};
// Time Complexity: O(n log n)
// Space Complexity: O(1) (considering in-place sorting)
