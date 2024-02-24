function triangularSum(nums: number[]): number {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        for (let i = start; i < end; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        end--;
    }
    return nums[0];
};
// TC O(n^2)
// SC O(1)
