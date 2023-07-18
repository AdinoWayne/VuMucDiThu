function longestArithSeqLength(nums: number[]): number {
    let dp = {};
    let max = 0;

    for (let i=0;i<nums.length;i++) {
        if (dp[i]==null) dp[i] = {}; // init
        for (let j=0;j<i;j++) {
            let diff = nums[i] - nums[j];
            dp[i][diff] = 1 + (dp[j][diff]||1);
            max = Math.max(dp[i][diff], max);
        }
    }
    return max;
};
// What is an Arithmetic Subsequence ?
// During high-school we learnt this concept with another name **Arithmetic Progression (AP)*.
// TC O(n2)
// SC O(n)
