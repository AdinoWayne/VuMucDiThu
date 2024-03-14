class SmallestInfiniteSet {
    outsiders: Set<number> | undefined = undefined;
    smallestTracer = 1;
    constructor() {
        if (this.outsiders == undefined) this.outsiders = new Set<number>();
    }

    popSmallest(): number {
        if (!this.outsiders?.has(this.smallestTracer)) {
            this.outsiders?.add(this.smallestTracer);
            return this.smallestTracer++;
        }
        ++this.smallestTracer;
        return this.popSmallest();
    }

    addBack(num: number): void {
        if (this.outsiders == undefined || !this.outsiders.has(num)) return;
                this.outsiders.delete(num);
                this.smallestTracer = num < this.smallestTracer ? num : this.smallestTracer;
    }
}

/**
 * The SmallestInfiniteSet class has an average time complexity of O(1) for both popSmallest() and addBack(), making it generally efficient for these operations. However, the worst-case time complexity of popSmallest() is O(log n) due to potential Set operations.
 * The space complexity is O(n), which is significant if a large number of elements are removed from the set.
 *
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
