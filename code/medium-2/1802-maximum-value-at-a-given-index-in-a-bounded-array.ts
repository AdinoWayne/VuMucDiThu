function maxValue(n: number, index: number, maxSum: number): number {
    let min = Math.floor(maxSum/n)
    let max = maxSum
    const findSum = (num, len) => {
        if (len < num) {
            return len * (num + num - len + 1) / 2
        } 
        return num * (num + 1) / 2 + (len - num)
    }
    const isWithin = num => {
        const leftSum = findSum(num, index + 1)
        const rightSum = findSum(num, n - index)
        return maxSum >= leftSum + rightSum - num
    }
    while (min <= max) {
        const mid = (min + max) >> 1
        isWithin(mid) ? min = mid + 1 : max = mid - 1
    }
    return max
};
// TC O(log(maxSum))
// SC O(1)

Notes on findSum:

// We have to consider two scenarios. If len < num, we can use the arithmetic formula normally, else we have to consider the trailing 1's.
// Example, findSum(10, 3) means we find the sum of 10 + 9 + 8 whereas findSum(3, 5) means finding the sum of 3 + 2 + 1 + 1 + 1.
// The formula for arithmetic progression is length of series * (largest number + smallest number) / 2
// For the case of len < num, we get len * ( (num) + (num - len + 1) ) / 2.
// For the case of len > num, we get num * ( num + 1 ) / 2 + (len - num) where (len - num) accounts for the trailing 1's.
