function partitionDisjoint(nums: number[]): number {
    let m=nums[0],count=1,max_ele=nums[0];
    for(let i=0;i<nums.length;i++)
    {
        if(m>nums[i]){
            count=i+1;
        m=Math.max(max_ele,m);
        }   
        else
            max_ele=Math.max(max_ele,nums[i]);
    }
    return count; 
};
