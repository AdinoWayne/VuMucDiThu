function longestNiceSubarray(nums: number[]): number {
    let mask=0,j=0,maxWindow=0;
    for(let i=0;i<nums.length;i++){
        while((mask & nums[i])!==0){//Need to reduce the window
            mask = mask & ~nums[j];
            j++;
        }
        mask = mask|nums[i];
        maxWindow = Math.max(maxWindow,i-j+1);
    }
    return maxWindow;
};
// TC O(n2)
// SC O(1)
