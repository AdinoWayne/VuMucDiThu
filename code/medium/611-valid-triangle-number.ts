function triangleNumber(nums: number[]): number {
    let count = 0;
    nums.sort((a,b) => a-b);
    for(let i = nums.length-1;i>=0;i--){
        let low = 0;
        let high = i-1;
        while(low<high){
            let sum = nums[low] + nums[high];
            if(sum>nums[i]){
                count += high - low;
                high--
            }else{
                low++;
            }
        }
    }
    
    return count
};
// where nums[i] + nums[j] > nums[k] (so that they can form a triangle).
// If nums[i] + nums[j] is larger than nums[k], we know that there will be j - i combination.

// Time complexity is O(n^2)
// Space complexity is O(1)
