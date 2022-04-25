class OrderedStream {
    data: string[];
    ptr: number;
    constructor(n: number) {
        this.data = new Array(n).fill(null)
        this.ptr = 0
    }

    insert(idKey: number, value: string): string[] {
        this.data[idKey-1] = value
        let rat = []
        while(this.ptr < this.data.length && this.data[this.ptr]) {
            rat.push(this.data[this.ptr])
            this.ptr += 1
        }
        return rat
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
