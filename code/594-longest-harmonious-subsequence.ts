function findLHS(nums: number[]): number {
    let map = new Map();
    let max = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const val = map.get(nums[i]);
        
        if(val) map.set(nums[i], val + 1);
        else map.set(nums[i], 1);
    }
    
    for(let i = 0; i < nums.length; i++) {
        const nextVal = map.get(nums[i] + 1);
        
        if(nextVal) {
            const curVal = map.get(nums[i]);
            if(curVal + nextVal  > max) max = curVal + nextVal;
        }
    }
    
    return max;
}
