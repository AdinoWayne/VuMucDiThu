function sortedSquares(nums: number[]): number[] {
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p--] = nums[l++] ** 2;
        } else {
            result[p--] = nums[r--] ** 2;
        }
    }
    return result;
};
