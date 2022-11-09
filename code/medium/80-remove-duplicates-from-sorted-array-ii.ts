function removeDuplicates(nums: number[]): number {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i += 1){
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};
