function fib(N: number): number {
  const memo = {}
  const helper = (x) => {
    if(memo[x]) return memo[x]
    if(x==1 || x==0) return x
    return memo[x] = helper(x-1) + helper(x-2)
  }
  return helper(N)
};
