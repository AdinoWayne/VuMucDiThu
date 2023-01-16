function integerReplacement(n: number): number {
  return helper(n, {});
};

function helper(n, cache) {
  if (n === 1) return 0;
  if (cache[n] !== undefined) return cache[n];

  let result = 0;
  if (n % 2 === 0) {
    result += 1 + helper(n / 2, cache);
  } else {
    result += 1 + Math.min(helper(n - 1, cache), helper(n + 1, cache));
  }

  return (cache[n] = result);
}
