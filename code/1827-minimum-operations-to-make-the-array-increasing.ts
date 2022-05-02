function minOperations(nums: number[]): number {
        let ans = 0;
        for (let i = 1; i < nums.length; i++) {
            let previous = nums[i-1];
            let current = nums[i];
            if (current <= previous) {
                current = previous + 1;
                ans += (current - nums[i]);
                nums[i] = current;
            }
        }
        return ans;
};
