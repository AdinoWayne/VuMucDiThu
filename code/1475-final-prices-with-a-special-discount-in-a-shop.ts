function finalPrices(prices: number[]): number[] {
        let n = prices.length;
        let res = [];
        for (let i = 0; i < n; i++) {
            let p = prices[i];
            res[i] = p;
            for (let j = i + 1; j < n; j++) {
                if (prices[j] <= prices[i]) {
                    res[i] -= prices[j];
                    break;
                }
            }
        }
        return res;
};
