function minOperations(grid: number[][], x: number): number {
    const nums = []
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            nums.push(grid[i][j])
        }
    }
    if (nums.length < 2) {
        return 0
    }
    nums.sort((a, b) => a -b) 
    const n = nums.length
    const median = Math.floor(n/2)
    let ans = 0
    for (let i=0; i< n; i++) {
        const distance = Math.abs(nums[i] - nums[median])
        if (distance % x) {
            return -1
        }
        ans += (distance / x)
    }
    return ans
};
// TC O(nLogn)
// SC O(n)
