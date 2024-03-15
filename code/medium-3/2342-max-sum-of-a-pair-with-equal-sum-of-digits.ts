function maximumSum(nums: number[]): number {
    const hash = {}
    for (let num of nums) {
        const str = num + ''
        let sum = 0
        for (let ch of str) {
            sum += parseInt(ch)
        }
        if (!(sum in hash)) {
            hash[sum] = []
        }
        hash[sum].push(num)
    }
    let max = -1
    for (let prop in hash) {
        hash[prop].sort((a, b) => b - a)
        if (hash[prop].length > 1) {
            max = Math.max(max, hash[prop][0] + hash[prop][1])
        }
    }
    return max
};
// Time complexity: O(n * (1 + k)) in the best case (no sorting), O(n * log n) in the worst case (frequent sorting).
// Space complexity: O(n)
