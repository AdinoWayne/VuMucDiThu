function intersection(nums: number[][]): number[] {
    let ans = [];
    let count = new Array(1001).fill(0);
    const n = nums.length;
    for (let A of nums)
      for (let a of A)
        ++count[a];

    for (let i = 1; i < 1001; ++i)
      if (count[i] == n)
        ans.push(i);

    return ans;
};
