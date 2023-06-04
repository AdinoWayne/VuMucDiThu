function minIncrementForUnique(nums: number[]): number {
  if(!nums || nums.length < 2) { // arrays with 0 or 1 numbers are already unique
    return 0;
  }
  
    let seen = {};
    let moves = 0;
  
    for(let i=0; i<nums.length; i++ )  {      
      while(seen[nums[i]] === true) { // if we have seen the num before use a move to incriment it
        nums[i]++; 
        moves++;
      }
      
      seen[nums[i]] = true;
    }
  
  return moves;
};
