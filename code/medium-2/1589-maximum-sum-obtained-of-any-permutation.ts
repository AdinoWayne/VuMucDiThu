function maxSumRangeQuery(nums: number[], requests: number[][]): number {
    const MODULO = 10 ** 9 + 7;
    const size = nums.length;
    const frequency = Array(size).fill(0);

    for (const [start, end] of requests) {
        frequency[start] += 1;
        if (end + 1 === size) continue;
        frequency[end + 1] -= 1;
    }
    for (let index = 1; index < size; index++) {
        frequency[index] += frequency[index - 1];
    }
    frequency.sort((a, b) => a - b);
    nums.sort((a, b) => a - b);

    return nums.reduce((result, num, index) => {
        return (result + num * frequency[index]) % MODULO;
    }, 0);
};
// TC O(nLogn)
// SC O(n)
