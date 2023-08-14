function equalSubstring(s: string, t: string, maxCost: number): number {
  let left = -1;
  for (let right = 0; right < s.length; ++right) {
    maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    if (maxCost < 0) {
      ++left;
      maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
    }
  }
  return s.length - left - 1;
};
// TC O(n)
// SC O(1)
