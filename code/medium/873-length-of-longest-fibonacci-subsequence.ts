function lenLongestFibSubseq(arr: number[]): number {
  const map = {};
  const N = arr.length;
  const dp = [...Array(N)].map(r => Array(N).fill(2));
  
  let max = 0;
  for (let i = 0; i < N; i++) {
    map[arr[i]] = i;
    for (let j = 0; j < i; j++) {
      if (arr[i]-arr[j] < arr[j] && arr[i]-arr[j] in map) {
        dp[j][i] = Math.max(dp[j][i], 1 + dp[map[arr[i]-arr[j]]][j]);
      }
      max = Math.max(max, dp[j][i]);
    }
  }
  return max === 2 ? 0 : max;
};

// Time complexity: O(n2)
// Space complexity: O(n2)
