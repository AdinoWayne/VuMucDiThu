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

// The complexity of the function integerReplacement is O(n) in time and O(n) in space, where n is the input value n.

// The reason is that the function helper is using memoization to store the computed results of intermediate values in a cache object.
// This way, if the same value n is encountered again, the result can be retrieved from the cache instead of being recomputed.
// This reduces the number of calls to the function and saves time. However, it also uses additional space to store the cache, which is why the space complexity is O(n).
