function sortArrayByParity(nums: number[]): number[] {
      let i = 0, j = nums.length - 1;
      while (i < j) {
           if (nums[i] % 2 > nums[j] % 2) {
           let tmp = nums[i];
           nums[i] = nums[j];
           nums[j] = tmp;
           }
          if (nums[i] % 2 == 0) i++;
          if (nums[j] % 2 == 1) j--;
      }
      return nums;
}
