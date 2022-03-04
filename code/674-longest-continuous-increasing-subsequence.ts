function findLengthOfLCIS(nums: number[]): number {
    let count = 0;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!temp || nums[i - 1] < nums[i]) {
            temp += 1;
            count = Math.max(count, temp);
        } else {
            temp = 1
        }
    }
    return count;
};
