function maximumProduct(nums: number[], k: number): number {
    nums.sort((a,b)=>a-b)
    let min;
    while(k){
        min=nums[0]
        for(let q=0;q<nums.length;q++){
            if(nums[q]==min && k){
                nums[q]++
                k--
            }else break
        }  
    }
    return nums.reduce((a,b)=>a*b % (1e9+7))
};
// TC:
// Sorting: O(n log n)
// Incrementing Minimum Elements: O(nk)
// Product Calculation: O(n)

// SC O(1)

// hint: We can increment minimum number in all k operations and take their product in end.
