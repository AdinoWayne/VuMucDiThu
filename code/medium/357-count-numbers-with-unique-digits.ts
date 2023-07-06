function countNumbersWithUniqueDigits(n: number): number {
    var dp = [1, 10];
    var sum = [1, 11];
    for (var i = 2; i <= n; i++) {
        dp[i] = sum[i - 1] + (10 - i) * (dp[i - 1]);
        sum[i] = sum[i - 1] + dp[i];
    }
    return dp[n];
};

// not using math
const countNumbersWithUniqueDigits = (n: number): number => {
  if (n == 0) return 1;
  if (n == 1) return 10;
  let k = 9;
  for (let i = 0; i < n - 1; i++) {
    k *= (9 - i);
  }
  return k + countNumbersWithUniqueDigits(n - 1);
};

// TC O(n)
// SC O(1)
