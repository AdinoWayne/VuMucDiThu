class Solution {
    arr: number[]
    constructor(w: number[]) {
        this.arr = [];
        let sum = 0;
        for(let i=0; i<w.length; i++) {
            sum += w[i];
            this.arr.push(sum);
        }
    }

    pickIndex(): number {
        let target = Math.random() * this.arr[this.arr.length-1];
        
        let low = 0;
        let high = this.arr.length - 1;
        while (low < high) {
            let mid = Math.floor(low + ((high-low)/2));
            if(this.arr[mid] <= target)
                low = mid + 1;
            else 
                high = mid;
        }
        return high;
    }
}
// idea: random betwween sum
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
