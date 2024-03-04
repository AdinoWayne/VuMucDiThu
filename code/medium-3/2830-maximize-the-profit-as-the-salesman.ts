function maximizeTheProfit(n: number, offers: number[][]): number {
const m = offers.length;
  const dp = new Array(m).fill(undefined);
  offers.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  return helper(0, offers, dp, m);
};

function helper(i, offers, dp, m) {
  if (i >= m) return 0;
  if (dp[i] !== undefined) return dp[i];

  const [_, end, gold] = offers[i];

  const skip = helper(i + 1, offers, dp, m);
  const ignorePrev = gold;
  let combineWithPrev = gold;
  let idx = binarySearch(end, i + 1, offers, m);
  if (idx !== null) {
    combineWithPrev += helper(idx, offers, dp, m);
  }

  return (dp[i] = Math.max(skip, ignorePrev, combineWithPrev));
}

function binarySearch(end, startIdx, offers, m) {
  let low = startIdx;
  let high = m - 1;
  let idx = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (offers[mid][0] <= end) {
      low = mid + 1;
    } else {
      idx = mid;
      high = mid - 1;
    }
  }

  return idx;
}
