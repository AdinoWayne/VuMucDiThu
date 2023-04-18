function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    let lastInRange = -1, lastOverBound = -1, sum = 0;
    for(let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if(el > right) {
            lastOverBound = i;
            continue;
        }
        if(el >= left && el <= right) {
            lastInRange = i;
        }
        if(lastInRange <= lastOverBound) continue;
        sum += lastInRange - lastOverBound;
    }
    return sum;
};
