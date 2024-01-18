function countMaxOrSubsets(nums: number[]): number {
    const maxOR = nums.reduce((a, b) => a | b, 0);
    let result = 0;

    // generate all subsets of nums
    const backtrack = (nums, start, subset) => {
        // If the current subset has a bitwise OR equal to the maximum bitwise OR, increment the result
        if (subset.length) {
            const subsetOR = subset.reduce((a, b) => a | b, 0);
            if (subsetOR === maxOR) {
                result++;
            }
        }

        for (let i = start; i < nums.length; i++) {
        subset.push(nums[i]);
        backtrack(nums, i + 1, subset);
        subset.pop();
        }
    }

    // Start the backtracking with an empty subset
    backtrack(nums, 0, []);
    return result;
};
// TC O(3^n)
// SC O(n)
