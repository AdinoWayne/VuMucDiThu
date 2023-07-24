function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let satisfied = 0;
  let maxGrumpySatisfied = 0;
  
  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = i === 0 ? 0 : customers[i - 1];
      continue;
    }
    
    if (i > 0) {
      customers[i] += customers[i - 1];
    }
    
    const grumpySatisfied = minutes <= i ? customers[i] - customers[i - minutes] : customers[i];
    maxGrumpySatisfied = Math.max(maxGrumpySatisfied, grumpySatisfied);
  }
  
  return satisfied + maxGrumpySatisfied;
};
// TC O(n)
// SC O(1)
