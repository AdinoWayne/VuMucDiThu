class MyHashSet {
    size: number;
    buckets: number[][] = [];
    constructor(size = 999) {
        this.size = size;
    }

    add(key: number): void {
        const bucket = this.findBucket(key);
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
        this.buckets[this.findIndex(key)] = bucket;
    }

    remove(key: number): void {
        const bucket = this.findBucket(key)
        const index = bucket.indexOf(key);
        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        const bucket = this.findBucket(key)
        return bucket.includes(key);
    }

    findIndex(key: number): number {
        return Math.abs(this.createHash(key) % this.size);
    }

    findBucket(key: number): number[] {
        const index = this.findIndex(key);
        return this.buckets[index] || [];
    }

    createHash(key: number): number {
        let result = 0;
        for (let i = 0; i < `${key}`.length; i++) {
            result = (((result << 5) - result) + `${key}`.charCodeAt(i)) & 0xFFFFFFFF;
        }
        return result;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
