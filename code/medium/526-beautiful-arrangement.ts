function countArrangement(n: number): number {
    let count = 0;
    const nums = [];
    for(let i = 1; i <= n; i++) {
        nums.push(i);
    }
    
    function findArrangements(index) {        
        if (index == nums.length) {
            count++;
        }
        
        for(let i = index; i < nums.length; i++) {     
            swap(nums, i, index);
            if ((index + 1) % nums[index] === 0 ||
                nums[index] % (index + 1) === 0) { 
                findArrangements(index + 1);
            }
            swap(nums, i, index);
        }
    }
    findArrangements(0);
    
    return count;
};

function swap(nums, one, two) {
    let temp = nums[one];
    nums[one] = nums[two];
    nums[two] = temp;
}
