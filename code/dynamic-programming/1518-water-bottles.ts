function numWaterBottles(numBottles: number, numExchange: number): number {
    const recursive = (num, res) => {
        if(num < numExchange) return res;
        const bottle = Math.floor(num / numExchange), left = num % numExchange;
        return recursive(bottle + left, res + bottle);
    }
    return recursive(numBottles, numBottles);
};
