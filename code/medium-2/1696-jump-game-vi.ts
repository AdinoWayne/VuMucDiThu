function maxResult(nums: number[], k: number): number {
    let dq = [];
    
    for(let i=nums.length-1;i>=0;i--){
        while(dq.length > 0 && dq[0] > i+k)
            dq.shift();
        if(dq.length <=0)
            dq.push(i);
        else{
            nums[i] = nums[dq[0]] + nums[i];
            while(dq.length>0 && nums[dq[dq.length-1]]< nums[i])
                dq.pop();
            dq.push(i);
        }
    }
    return nums[0];
};
// Time Complexity: O(n)
// Space Complexity: O(n)
