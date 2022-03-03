function findMaxAverage(nums: number[], k: number): number {
    let max = 0;
    const n = nums.length;
    for (let i = 0; i < k; i++) {
        max += nums[i];
    }
    let sum = max;
    for (let i = k; i < n; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    return max / k;
}