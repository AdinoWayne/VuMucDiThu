function waysToMakeFair(nums: number[]): number {
    let prevEven = 0;
    let prevOdd = 0;
    let nextEven = 0;
    let nextOdd = 0;

    for (let index = 0; index < nums.length; index++) {
        if (index % 2 === 0) {
            nextEven += nums[index];
        } else {
            nextOdd += nums[index];
        }
    }

    let count = 0;

    for (let index = 0; index < nums.length; index++) {
        if (index % 2 === 0) {
            nextEven -= nums[index];
        } else {
            nextOdd -= nums[index];
        }

        if (prevEven + nextOdd === prevOdd + nextEven) {
            count++;
        }

        if (index % 2 === 0) {
            prevEven += nums[index];
        } else {
            prevOdd += nums[index];
        }
    }

    return count;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
