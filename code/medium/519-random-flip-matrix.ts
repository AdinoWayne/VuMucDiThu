class Solution {
    hash: Map<any, any>
    m: number
    n: number
    size: number
    constructor(m: number, n: number) {
        this.hash = new Map;
        this.m = m;
        this.n = n;
        this.size = m * n;
    }

    flip(): number[] {
        const id = Math.random() * this.size | 0;
        this.size -= 1;
        const rand = this.hash.get(id) ?? id;
        const size = this.hash.get(this.size) ?? this.size;
        this.hash.set(id, size);

        return [rand / this.n | 0, rand % this.n];
    }

    reset(): void {
        this.hash.clear();
        this.size = this.m * this.n;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
