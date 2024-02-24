function minDeletion(nums: number[]): number {
    const n = nums.length;
    let deletes = 0;
    for (let i = 0; i < n - 1; i++) {
        let j = i - deletes;
        if (
            j % 2 === 0 &&
            nums[i] === nums[i + 1]
        ) {
            // condition
            deletes++;
        }
    }
    return deletes + ((n - deletes) % 2);
};
// TC O(n)
// SC O(1)
