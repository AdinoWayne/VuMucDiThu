function minSubArrayLen(target: number, nums: number[]): number {
    let distance = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    // left pointer and right pointer defines the window. 
    // the goal is to find the smallest window that has a sum of s or larger.
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        while (sum >= target) {
            distance = Math.min(distance, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};
