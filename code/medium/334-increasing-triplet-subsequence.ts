function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;
  
  for (let curr of nums) {
    if (curr > second && curr > first) {
      return true;
    }
    if (curr > first) {
      second = curr;
    } else {
      first = curr;
    }
  }
  return false;
};

// Time complexity: O(n)
// Space complexity: O(1)
