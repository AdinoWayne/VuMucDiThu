function maxAlternatingSum(nums: number[]): number {
    let oddSum = 0;
    let evenSum = 0;

    for (const number of nums) {
        oddSum = Math.max(oddSum, evenSum + number);
        evenSum = Math.max(evenSum, oddSum - number);
    }

    return Math.max(oddSum, evenSum);
};
