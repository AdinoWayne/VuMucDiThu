function maxProfit(prices: number[]): number {
    let hold = -Infinity, sold = 0, rest = 0;
    for (let i = 0; i < prices.length; i++) {
        let nextHold = Math.max(hold, rest - prices[i]);
        let nextSold = hold + prices[i];
        let nextRest = Math.max(rest, sold);
        hold = nextHold;
        sold = nextSold;
        rest = nextRest;
    }
    return Math.max(sold, rest);
};
