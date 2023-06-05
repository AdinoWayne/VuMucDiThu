class StockSpanner {
    prices: number[][]
    constructor() {
        this.prices = [];
    }

    next(price: number): number {
        let c = 1;
        while (this.prices.length>0 && price>=this.prices[this.prices.length-1][0]) { //go left in our condensed array
            c += this.prices[this.prices.length-1][1]; //add the grouped counts of smaller elements
            this.prices.pop(); // get rid of < values now that we've got their count, elim unnecessary data
        }
        this.prices.push([price, c]) //add grouped element to our condensed array
        return c; //return last count for # days <= current
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// Time complexity: O(n)
// Space complexity: O(n)
