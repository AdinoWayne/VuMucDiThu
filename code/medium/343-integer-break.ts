function integerBreak(n: number): number {
  if (n < 4) return n - 1;
    
  let times3 = Math.floor(n / 3);
  let diff = n - (times3 * 3);

  if (diff == 0) {
    return Math.pow(3, times3);
  } else if (diff == 1) {
    return Math.pow(3, times3 - diff) * (3 + diff)
  } else { //diff == 2
    return Math.pow(3, times3) / (3 + diff) * 10
  }
};

// TC O(1)
// SC o(1)
