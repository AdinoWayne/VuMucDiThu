function canSplitArray(nums: number[], m: number): boolean {
    if (nums.length <= 2) return true;
    // 只要有兩個連續的數字和大於等於 m，就可以分割
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] >= m) {
        return true;
        }
    }

    return false;
};
