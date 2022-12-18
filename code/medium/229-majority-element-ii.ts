function majorityElement(nums: number[]): number[] {
    const memo = {}
    for (let i = 0; i < nums.length; i++) {
      if (!memo[nums[i]]) memo[nums[i]] = 0
      memo[nums[i]]++
    }
    const ret = []
    for (const m in memo) {
      if (memo[m] > nums.length / 3) ret.push(parseInt(m))
    }
    return ret
};
