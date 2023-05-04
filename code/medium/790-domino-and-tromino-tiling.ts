function numTilings(n: number): number {
  const mod = 1e9 + 7
  const cash = new Map([[1,1],[2,2],[3,5]])
  const count = (n) => {
    if (!cash.has(n)) cash.set(n, count(n-1)*2 + count(n-3))
    return cash.get(n) % mod
  }
  return count(n)
};

// n=1: 1
// n=2: 2
// n=3: 5
// n=4: 11 = 2 * 5 + 1
// n=5: 24 = 2 * 11 + 2
// n=6: 53 = 2 * 24 + 5
// n=7: 117 = 2 * 53 + 11
// n=8: 256 = 2 * 117 + 24
// n=9: 569 = 2 * 256 + 53

// this gives us the following context: n=i: n[i] = 2 * n[i - 1] + n[i - 3]
// Time complexity: O(n)
// Space complexity: O(n)
