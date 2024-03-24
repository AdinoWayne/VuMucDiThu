function validPartition(nums: number[]): boolean {
    let n = nums.length;

    if (n === 1) return false;

    let dp = [true, false, n > 1 && nums[0] === nums[1]];

    for (let i = 2; i < n; i++) {
        let current_dp = false;

        if (nums[i] === nums[i-1] && dp[1]) {
            current_dp = true;
        }
        else if (nums[i] === nums[i-1] && nums[i] === nums[i-2] && dp[0]) {
            current_dp = true;
        }
        else if (nums[i] - nums[i-1] === 1 && nums[i-1] - nums[i-2] === 1 && dp[0]) {
            current_dp = true;
        }

        [dp[0], dp[1], dp[2]] = [dp[1], dp[2], current_dp];
    }
    return dp[2];
};
// Time Complexity: O(n)
// Space Complexity: O(1)

// 1.Initialization:

// Check the base case where the list has only one element. In this scenario, we can't create any valid subarray, so we return False.
// Initialize the dp array with the following values:
// dp[0] is True because an empty list is always valid.
// dp[1] is False initially.
// dp[2] checks if the first two numbers are identical.

// 2.Iterate through the List:
// Start iterating from the third element (index = 2).
// For each number:
// Check if it matches the previous one and if dp[1] is True, indicating a valid partition up to this point.
// Check if it forms a triplet with the two preceding numbers that are identical and if dp[0] is True, maintaining the validity.
// Check if the current and the two preceding numbers form a sequence of three consecutive increasing numbers, and if dp[0] is True, keeping the partition valid.
// Slide the window forward by reassigning the values in the dp array.

// 3.Result:
// After iterating through the entire list, dp[2] will reflect whether the list can be partitioned into valid subarrays.
