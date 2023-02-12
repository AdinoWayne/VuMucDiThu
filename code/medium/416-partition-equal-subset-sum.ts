function canPartition(nums: number[]): boolean {
    let sum:any = nums.reduce((acc, v) => acc + v, 0) / 2;
    if (sum !== Math.floor(sum)) {
        return false;
    }

    const dp = [];
    dp[0] = true;
    for (let i = 1; i <= nums.length; i++) {
        for (let j = sum; j >= nums[i-1]; j--) {
            dp[j] = (dp[j] ? 1 : 0) || dp[j - nums[i-1]];
        }
    }
    return dp[sum] ? true : false;
};

//  (dp[j] ? 1 : 0) cache value 
// dp[j - nums[i-1]]; true when half sum - > currentValue === prev Sum
