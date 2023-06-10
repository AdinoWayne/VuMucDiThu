function maxSubarraySumCircular(nums: number[]): number {
  let maxSum, max, minSum, min, total
  maxSum = max = minSum = min= total = nums[0]
  
  for(let i=1;i<nums.length;i++){
    const el = nums[i]
    max = Math.max(el, el + max)
    min = Math.min(el, el + min)
    maxSum = Math.max(max, maxSum)
    minSum = Math.min(min, minSum)
    total += el
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};

// Time complexity: O(n)
// Space complexity: O(1)
