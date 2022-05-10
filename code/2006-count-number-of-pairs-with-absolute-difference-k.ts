function countKDifference(nums: number[], k: number): number {
    let m = {};
    let ans = 0;
    for (let x of nums) {
      ans = m[x - k] ? m[x - k] + ans : ans;
      ans = m[x + k] ? m[x + k] + ans : ans;
      m[x] ? ++m[x] : m[x] = 1;
    }
    return ans;
};
