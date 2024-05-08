function distinctPrimeFactors(nums: number[]): number {
    let primeSet = generatePrimes(1001);
    let set = new Set();

    for (let e of nums) {
        for (let i = 1; i <= Math.sqrt(e) + 1; i++) {
        if (e % i === 0 && primeSet.has(i)) {
            set.add(i);
            if (primeSet.has(e / i)) {
            set.add(e / i);
            }
        }
        }
        if (primeSet.has(e)) {
        set.add(e);
        }
    }

    return set.size;
};

function isPrime(n) {
  if (n < 2) return 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return 0;
  }
  return 1;
}
function generatePrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return new Set(primes);
}
// Time Complexity: O(n * log(log(n)))
// Space Complexity: O(n * sqrt(max(nums)) * log(max(nums)))
