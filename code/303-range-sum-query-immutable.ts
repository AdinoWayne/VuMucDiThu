class NumArray {
    a: number[];
    constructor(nums: number[]) {
        this.a = new Array(nums.length + 1);
        this.a[0] = 0;
        for(let i = 1; i <= nums.length; i++)
            this.a[i] = this.a[i - 1] + nums[i - 1];
    }
    sumRange(left: number, right: number): number {
        return this.a[right+1] - this.a[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
