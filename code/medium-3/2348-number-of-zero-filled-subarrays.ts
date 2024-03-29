function zeroFilledSubarray(nums: number[]): number {
      let count = 0;
      let subcount = 0;
      for (const num of nums) {
        if (num !== 0) {
          subcount = 0; 
          continue; 
        }
        subcount++;
        count += subcount;
      }
      return count;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
