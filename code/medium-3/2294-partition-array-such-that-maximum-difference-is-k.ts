function partitionArray(nums: number[], k: number): number {
    let sorted = nums.sort((a, b) => a-b)
    let list = []
    let count = 0
    list.push(sorted[0])
    for (let i = 1; i < sorted.length; i++) {
        let num = sorted[i]
        if (num-list[0]>k) {
            count++
            list = []
        }
        list.push(num)
    } if (list.length) count++
    return count
};
