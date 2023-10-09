function longestSubarray(nums: number[]): number {
  const dp = [...new Array(nums.length)].map(() => new Array(2));
  // Initalize dp[0][0] and max to nums[0]
  // Initalize dp[0][1] to 0 because we have to delete the first element to reach the deleted state
  dp[0] = [nums[0], 0];
  let max = 0;
    
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == 0) {
	  // In the case of 0 
	  // For dp[i][1], delete element 0 and set deleted state to not deleted state of dp[i-1]
	  // For dp[i][0], set deleted state to 0 because we can't delete any more and the longest contigous 1 to element 0 is none
      dp[i][1] = dp[i - 1][0];
      dp[i][0] = 0;
    } else {
	  // In the case of 1, increment both states by 1 because we don't need to worry about deletion
      dp[i][0] = dp[i - 1][0] + 1;
      dp[i][1] = dp[i - 1][1] + 1;
    }
    
	// Since we have to delete one element, we only care about max of deleted states
    max = Math.max(dp[i][1], max);
  }
  
  return max;
};
// TC O(n)
// SC O(n)
