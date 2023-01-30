function largestDivisibleSubset(nums: number[]): number[] {
    // Sort all array elements in increasing order. The purpose of sorting is to make sure that all divisors of an element appear before it.
    nums.sort((a,b)=>a-b)
    // Create an array dp[] of same size as input array.
    // dp[i] stores size of divisible subset ending with nums[i] (In sorted array). The minimum value of dp[i] would be 1.
    var dp = Array.from({length: nums.length}, (v,k) => [nums[k]]);
    // Traverse all array elements.
    // For every element, find a divisor nums[j] with largest value of dp[j] and store the value of dp[i] as dp[j] + 1.
    for (let i=nums.length-1; i>=0; i--) {
        for (let j = i+1; j<nums.length; j++) {
            if (dp[i].length<=dp[j].length && dp[j][0]%nums[i]===0) {
                dp[i] = [nums[i], ...dp[j]];
            }
        }
    }
    return dp.reduce((a,x) => a.length > x.length ? a : x);
};

// Time Complexity : O(n2)
// Auxiliary Space : O(n)
