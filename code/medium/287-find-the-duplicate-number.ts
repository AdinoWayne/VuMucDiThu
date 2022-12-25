function findDuplicate(nums: number[]): number {
    let slow = nums[0], fast = nums[nums[0]];
		
    //here fast moves two steps at a time
    while(slow!==fast){
    	slow = nums[slow];
    	fast = nums[nums[fast]];
    }
    fast=0;
		
    //here fast move one step at a time
    while(slow!==fast){
    	slow = nums[slow];
    	fast = nums[fast];
    }
    return slow;
};
