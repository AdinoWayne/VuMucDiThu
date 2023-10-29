function minCost(colors: string, neededTime: number[]): number {
  let res = 0;
  for (let i = 0, max = 0; i < colors.length; i++) {
    res += neededTime[i];
    max = Math.max(max, neededTime[i]);
    if (colors[i] !== colors[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};
// TC O(n)
// SC O(1)
