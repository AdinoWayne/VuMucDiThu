function find132pattern(nums: number[]): boolean {
    let stack = []
    let s3 = -Infinity
    const n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < s3) return true
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            s3 = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
}
// program with O(n) time and space complexity
