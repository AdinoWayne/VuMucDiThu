/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
      var len = nums.length;
      var lastZeroIndex = -1;
      for (var i = 0; i < len; i++) {
        if (nums[i] === 0 && lastZeroIndex === -1) {
          lastZeroIndex = i;
        } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
          let temp = nums[i];
          nums[i] = nums[lastZeroIndex];
          nums[lastZeroIndex] = temp
          lastZeroIndex += 1;
        }
      }
};
