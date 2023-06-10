function maxWidthRamp(nums: number[]): number {
    let result = 0;
    nums.map((el,i) => {
        let j = nums.length-1;
        while(nums[j] < nums[i]) j--;
        result = Math.max(result, j-i);
    });
    return result;
};
