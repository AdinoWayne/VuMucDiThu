class CustomStack {
    maxSize: number;
    size: number;
    stack: any;
    constructor(maxSize: number) {
        // set max size
        this.maxSize = maxSize;

        // set initial size
        this.size = 0;

        // stack
        this.stack = [];
    }

    push(x: number): void {
        // make sure we're not at max size
        if (this.size !== this.maxSize) {
            // push as normal
            this.stack.push(x);
            // increment size
            this.size++;
        }
    }

    pop(): number {
        // check if empty to return -1
        if (this.size === 0) {
            return -1;
        } else {
            // decrement size and return pop()
            this.size--;
            return this.stack.pop();
        }
    }

    increment(k: number, val: number): void {
        // iterate from 0 to k (or size since thats as far we can go)
        for (let i = 0; i < Math.min(k, this.size); i++) {
            // increment at this index
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
