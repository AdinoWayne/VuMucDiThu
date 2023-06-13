function numSubarraysWithSum(nums: number[], goal: number): number {
    return withSumAtMost(nums, goal) - withSumAtMost(nums, goal - 1);
}
function withSumAtMost(a, t) {
    if (t < 0) return 0;
    let i = 0,
        sum = 0,
        cc = 0;
    for (let j = 0; j < a.length; j++) {
        sum += a[j];
        for (; sum > t; i++) {
            sum -= a[i];
        }
        cc += j - i + 1;
    }
    return cc;
}

// TC: O(n)
// SC: O(1)
