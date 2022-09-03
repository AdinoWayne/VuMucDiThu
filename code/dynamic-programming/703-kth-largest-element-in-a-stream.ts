class KthLargest {
    k: number
    arr: any[]
    constructor(k, nums) {
        this.k = k;
        this.arr = nums.sort((a, b) => a - b);
    }
    add(val) {
        const insert = () => {
            let l = 0, r = this.arr.length - 1;
            while(l <= r) {
                const mid = Math.floor((l + r) / 2);
                if(this.arr[mid] === val) return mid;
                if(this.arr[mid] < val) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            return l;
        }
        this.arr.splice(insert(), 0, val);
        return this.arr[this.arr.length - this.k];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
