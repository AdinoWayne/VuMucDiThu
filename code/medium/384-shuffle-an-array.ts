class Solution {
    nums: number[]
    random: number[]
    constructor(nums: number[]) {
        this.nums = nums;
        this.random = [...nums];
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        for(let i = 0; i < this.random.length; i++) {
            const randIdx = Math.floor(Math.random() * this.random.length);
            this.swap(i, randIdx);
        }
        return this.random;
    }

    swap(i: number, j: number): void {
        [this.random[i], this.random[j]] = [this.random[j], this.random[i]]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
