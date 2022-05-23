function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const n = nums.length;
    let ans = [];

    for (let i = 0, j = 0; i < n; ++i) {
      while (j < n && (nums[j] != key || j < i - k))
        ++j;
      if (j == n)
        break;
      if (Math.abs(i - j) <= k)
        ans.push(i);
    }

    return ans;
};
