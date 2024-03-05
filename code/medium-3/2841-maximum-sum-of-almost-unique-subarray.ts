function maxSum(nums: number[], m: number, k: number): number {
    let subArrayUniqueElements = {}
    let subArrayUniqueElementsCount = 0
    let maxSumOfSubArray = 0
    let sumOfKLength = (function () {
        let sum = 0
        for (let index = 0; index < k - 1; index++) {
            if (!subArrayUniqueElements[nums[index]]) {
                subArrayUniqueElements[nums[index]] = 0
                subArrayUniqueElementsCount++
            }
            subArrayUniqueElements[nums[index]] += 1
            sum += nums[index]
        }
        return sum
    })()

    for (let index = k - 1; index < nums.length; index++) {
        if (!subArrayUniqueElements[nums[index]]) {
            subArrayUniqueElements[nums[index]] = 0
            subArrayUniqueElementsCount++
        }
        subArrayUniqueElements[nums[index]] += 1
        sumOfKLength += nums[index]
        if (subArrayUniqueElementsCount >= m) {
            if (maxSumOfSubArray < sumOfKLength) {
                maxSumOfSubArray = sumOfKLength
            }
        }
        const backIndexToBeEliminated = index - k + 1
        sumOfKLength -= nums[backIndexToBeEliminated]
        subArrayUniqueElements[nums[backIndexToBeEliminated]] -= 1
		// Not removing the elements to save memory and execution time
        if (subArrayUniqueElements[nums[backIndexToBeEliminated]] === 0) {
            subArrayUniqueElementsCount--
        }
    }
    return maxSumOfSubArray
};
