class RLEIterator {
    index: number;
    encoding: number[];
    constructor(encoding: number[]) {
        this.index = 0;
        this.encoding = encoding;
    }

    next(n: number): number {
        while (n > 0 && this.index < this.encoding.length) {

            const count = this.encoding[this.index];
            const num = this.encoding[this.index + 1];

            if (count < n) {
                n -= count;
                this.index += 2;
            } else {
                this.encoding[this.index] = count - n;
                return num;
            }
        }
        
        return -1;
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
