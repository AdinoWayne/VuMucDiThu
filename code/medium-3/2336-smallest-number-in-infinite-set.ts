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
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
