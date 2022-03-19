function largestSumAfterKNegations(nums: number[], k: number): number {
   nums.sort((a,b) => a-b);
   let index = 0;
   let count = k;
   while(count > 0){
       nums[index] *= -1;
       if(index < nums.length-1 && nums[index] > nums[index+1]){
           index++;
       }
       count--;
   }
   return nums.reduce((sum, value) => sum + value);
};
