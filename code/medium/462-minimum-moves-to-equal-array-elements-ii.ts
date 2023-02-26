function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b); //! sort the array
  let mid = nums[Math.floor(nums.length / 2)]; //! select the median element
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const need_to_get = mid - nums[i]; //! get the difference between the middle element and the current element
    count += Math.abs(need_to_get);
  }
  return count;
};
