function minDifference(nums: number[]): number {
    if (nums.length <= 4) return 0
    nums.sort((a,b) => a-b)
    let i = 0;
    let j = nums.length - 4
    let min = Infinity
    while(i <= 3){
        min = Math.min(nums[j] - nums[i], min)
        i++
        j++
    }
    return min
};
// TC O(nLogn)
// SC O(1)
