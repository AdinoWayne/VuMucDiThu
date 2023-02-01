function wiggleMaxLength(nums: number[]): number {
        if (nums.length < 2)
            return nums.length;
        var down = 1, up = 1;
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1])
                up = down + 1;
            else if (nums[i] < nums[i - 1])
                down = up + 1;
        }
        return Math.max(down, up);
};

// When nums[i]>nums[i-1]:it means it wiggles up. So the element before it must be in down position.
// Therefore, up[i] = down[i-1]+1 and down[i] will be same as down[i-1].
// When nums[i]<nums[i-1]: it means the wiggles down, the element before it must be in up position.
// Therefore down[i] = 1+up[i-1] and up[i] will be same as up[i-1].

// input : [1, 7, 4, 9, 2, 5]
// UP: [1, 2, 2, 4, 4, 6]
// DOWN: [1, 1, 3, 3, 5, 5]

// Time complexity: O(n), n is the length of the array
// Space complexity: O(n), n is the length of the array
