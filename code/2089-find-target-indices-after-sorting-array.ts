function targetIndices(nums: number[], target: number): number[] {
    let ans = [];
    const count = nums.filter(el => el == target).length;
    const lessThan = nums.filter(el => el < target).length;
    for (let i = lessThan; i < lessThan + count; i++) {
        ans.push(i);
    }
    return ans;
};
