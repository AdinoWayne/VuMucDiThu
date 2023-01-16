class Solution {
    nums: number[]
    len: number
    constructor(nums: number[]) {
        this.nums = nums;
        this.len = nums.length;
    }

    pick(target: number): number {
        if (this.len == 1) return 0;
        var result = 0;
        var count = 0;
        for (var i = 0; i < this.len; i++) {
            if (this.nums[i] == target) {
                if (Math.floor(Math.random() * (++count)) == 0) result = i;
            }
        }
        return result;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
