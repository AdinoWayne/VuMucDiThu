function subarrayGCD(nums: number[], k: number): number {
    let n = nums.length, ans = 0;
  for (let i = 0; i < n; i++) {
    let gcd = nums[i];
    for (let j = i; j < n; j++) {
      gcd = getGCD(gcd, nums[j]);
      if (gcd === k) ans++;
    }
  }
  return ans;  
};

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}
