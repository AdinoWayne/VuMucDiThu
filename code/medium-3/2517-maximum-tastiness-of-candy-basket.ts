function maximumTastiness(price: number[], k: number): number {
    price.sort((a, b) => a - b);

  const n = price.length;
  let ans = 0;
  let low = 0;
  let high = price[n - 1];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(mid, price, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

function isOk(target, price, k) {
  let lastVal = price[0];
  let count = 1;

  for (let i = 1; i < price.length; i++) {
    const diff = price[i] - lastVal;
    if (diff >= target) {
      count++;
      lastVal = price[i];
    }
  }

  return count >= k;
}
// Time Complexity: O(N * log N)
// Space Complexity: O(log N)
