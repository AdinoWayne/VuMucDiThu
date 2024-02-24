function minDeletion(nums: number[]): number {
    var count = 0;
    for( let i = 0; i < nums.length ; i++ ) {
        if( i % 2 === 0 && nums[i] === nums[i + 1] ) {
            nums.shift();
            i--;
            count++;
        }
    }
    return nums.length % 2 !== 0 ? count + 1 : count;
};
// TC O(n)
// SC O(1)
