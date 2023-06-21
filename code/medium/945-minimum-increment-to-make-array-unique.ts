function minIncrementForUnique(nums: number[]): number {
    if(!nums || nums.length < 2) { // arrays with 0 or 1 numbers are already unique
      return 0;
    }
    let seen = {};
    let output = 0;

    for(let i=0; i<nums.length; i++ )  {      
        while(seen[nums[i]] === true) {
            // if we have seen the num before use a move to incriment it
            nums[i]++; 
            output++;
        }
        seen[nums[i]] = true;
    }
    return output;
};

// TC O(n)
// SC O(n)
