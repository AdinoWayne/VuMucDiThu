function numOfPairs(nums: string[], target: string): number {
    var count = 0;
    var x = 0;
    while (x < nums.length) {
        for (let y = 0; y<nums.length; y++) {
            if (nums[x] + nums[y] == target) {
                count += 1;
                if (x == y) {
                    count -= 1;
                }
            }
        }
        x++;
    }
    return count;
};
// TC O(n^2)
// SC O(1)
