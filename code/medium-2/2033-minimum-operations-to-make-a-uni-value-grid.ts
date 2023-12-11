function minOperations(grid: number[][], x: number): number {
    const nums = []
    for (let i=0; i< grid.length; i++) {
        for (let j=0; j< grid[0].length; j++) {
            nums.push(grid[i][j])
        }
    }
    
    // 1. only one single number, return directly
    if (nums.length < 2) {
        return 0
    }
    
    // 2. sorting all grid numbers in One - Dimension array
    nums.sort((a, b) => a -b) 
    
    // 3. find the median, which is the final target equal number index
	const n = nums.length
    const median = Math.floor(n/2)
    
    // 4. calculate the times of add and subtract
    let ans = 0
    for (let i=0; i< n; i++) {
        const distance = Math.abs(nums[i] - nums[median])
        // 4.1. number i can not get to the median number, return -1
        if (distance % x) {
            return -1
        }
        // 4.2. the operations required for number i to get to the median number
        ans += (distance / x)
    }
    return ans
};
