function countQuadruplets(nums: number[]): number {
        let n = nums.length
        let res = 0
        let d = []
        d[nums[0] + nums[1]] = 1
        for (let i = 2; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                res += (d[nums[j] - nums[i]] || 0);
            }
            for (let j = 0; j < i; j++) {
                if (d[nums[i] + nums[j]] == undefined) {
                    d[nums[i] + nums[j]] = 1
                } else {
                    d[nums[i] + nums[j]] += 1
                }
            }
        }
        return res
};
