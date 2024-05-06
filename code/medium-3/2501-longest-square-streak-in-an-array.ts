function longestSquareStreak(nums: number[]): number {
    const squares = new Set();
    for (let i = 2; i < 317; ++i) {
        squares.add(i * i);
    } 
    nums = nums.filter(o => o < 317 || squares.has(o));
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    let result = -1;
    let count = 0, current;
    for (const num of nums) {
        current = num;
        count = 1;
        while (set.has(current * current)) {
            current *= current;
            ++count;
        }
        if (count > result) result = count;
    }
    return result === 1 ? -1 : result;
};
// Time Complexity: O(n log n)
// Space Complexity: O(n)
