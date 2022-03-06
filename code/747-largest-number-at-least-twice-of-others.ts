function dominantIndex(nums: number[]): number {
    if (nums.length == 1)
        return 0;
    let tempMax = 0, tempSecondMax = 0, index = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > tempMax) {
            tempSecondMax = tempMax;
            tempMax = nums[i];
            index = i;
        }
        else if (nums[i] > tempSecondMax) {
            tempSecondMax = nums[i];
        }
    }
    return (tempMax >= 2 * tempSecondMax) ? index : -1;
};
