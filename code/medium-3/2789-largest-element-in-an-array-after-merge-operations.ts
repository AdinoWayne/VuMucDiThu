function maxArrayValue(nums: number[]): number {
    let len = nums.length;
    let sum = nums[len-1];
    for(let i = len-2; i >= 0; i--){
        if(sum >= nums[i]){
            sum += nums[i];
        }else{
            sum = nums[i];
        }
    }
    return sum;
};
