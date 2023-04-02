function checkPossibility(nums: number[]): boolean {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        // case: 2,4,1,...
        nums[i] = nums[i - 1];
      }
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

// Time Complexity: O(N) where N is the length of N
// Space Complexity: O(1) with no modification of inputs

//note: The problem becomes more difficult, however, once we realize that we're allowed to modify one element, which will naturally impact its relationship with the surrounding elements.
