class ProductOfNumbers {
    queue: any;
    constructor() {
        this.queue = [];
    }

    add(num: number): void {
        this.queue.push(num);
    }

    getProduct(k: number): number {
        let sum = 1;
        
        let i = this.queue.length - 1;
        
        while(k > 0) {
            sum *= this.queue[i];
            i--;
            k--;
        }
        return sum;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
// TC O(n)
// SC o(n)
