function getDescentPeriods(prices: number[]): number {
    let count = 0
    let res = 0
    for (let i=0;i<prices.length-1;i++){
        if(prices[i]-prices[i+1] === 1){
            count += 1
            res += count
        } else {
            count = 0
        }
    }
    return res + prices.length
};
