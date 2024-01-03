// IGNORE
function minSpaceWastedKResizing(nums: number[], k: number): number {
    let l = nums.length
  let dp = new Array(l + 1).fill(0)
  let itr = k
  
  while(itr >= 0) {
    for (let i = nums.length - 1; i >= 0; i--) {
      let waste = 0
      let max = nums[i]
      let min = dp[i + 1]
      
      for (let j = i; j >= 0; j--) {
        if (nums[j] <= max) {
          waste += (max - nums[j])
        } else {
          waste += (i - j) * (nums[j] - max)
          max = nums[j]
        }
        
        if (itr != k) {
          min = Math.min(min, waste + dp[j])
        } else {
          min = waste
        }
      }
      dp[i + 1] = min
    }
    itr--
  }
  return dp[l]
};
// TC O(n^2 * k) where n is the length of the input array nums and k is the number of allowed resizing operations
// SC O(n)
