function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b) => a - b); 
  let count = 0;
  
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      count++;
      coins -= costs[i]
    } else {
      break;  // a small optimization, end the loop early if coins go down to zero before we reach end of the length of costs.
    }
  }
  return count; 
};
// TC O(nLogn)
// SC O(1)
