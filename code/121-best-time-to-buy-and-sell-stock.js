function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i= 1; i < prices.length; i++) {
    let p = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, p);
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } 
  }
  return maxProfit;
}
