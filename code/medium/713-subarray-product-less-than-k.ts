function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0;
    let res = 0, left = 0, right = 0, product = 1;
    while(right < nums.length) {
        product *= nums[right];
        while(product >= k)  {
            product /= nums[left];
            left++;
        }
        res += right - left + 1;
        right++;
    }
    return res;
};

// Time complexity: O(n)
// Space complexity: O(1)
