function minimumSize(nums: number[], maxOperations: number): number {
    function helper(target, nums){
        if(target===0){
            return maxOperations+1
        }
        let counter = 0;
        for(let num of nums){
            if(num>target){
                counter+=Math.floor((num-1)/target);
            }
        }
        return counter;
    }
    
    let length = nums.length;
    let sum = 0;
    let max = 0;
    for(let i =0;i<nums.length;i++){
        sum+=nums[i];
        if(nums[i]>max) max = nums[i];
    }
    let left = Math.floor(sum/(length+maxOperations));
    let right = max;
    
    while(left<right){
        let mid = Math.floor((left+right)/2);
        let c = helper(mid, nums);
        if(c<=maxOperations){
            right=mid;
        }
        else if(c>maxOperations){
            left = mid+1;
        }
    }
    
    return left;
};
// TC O(n Log m)
// SC O(1)
