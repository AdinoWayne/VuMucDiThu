function countElements(nums: number[]): number {
    let maxi = Number.MIN_SAFE_INTEGER;
    let mini = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < mini) {
            mini = nums[i]
        }
        if (maxi < nums[i]) {
            maxi = nums[i]
        }
    }
    return nums.reduce((a, b) => {
        if (mini < b && b < maxi) {
            a++;
        }
        return a;
    }, 0)
};
