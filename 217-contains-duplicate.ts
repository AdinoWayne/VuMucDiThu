function containsDuplicate(nums: number[]): boolean {
    let a = {};
    let n = nums.length;
    let result = false;
    for (let i = 0; i < n; i++) {
        if (a[nums[i]] == undefined) {
            a[nums[i]] = i;
        } else {
            return true;
        }
    }
    return result;
};
