function countGood(nums: number[], k: number): number {
    let n = nums.length, count = {}, goodPairs = 0, ans = 0;
    for (let j = 0, i = 0; j < n; j++) {
        goodPairs += count[nums[j]] || 0;
        count[nums[j]] = (count[nums[j]] || 0) + 1;
        while (goodPairs >= k) {
        goodPairs -= --count[nums[i]];
        i++;
        }
        ans += i;
    }
    return ans;
};
