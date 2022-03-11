function isMonotonic(nums: number[]): boolean {
  let pointer = nums[0];
  let ind = 1;

  while(pointer == nums[ind]){
      pointer = nums[ind];
      ind ++ ;
  }

  if(pointer <  nums[ind]){
      for(let i = 1; i< nums.length - 1; i++){
          if( nums[i] > nums[i+1]){
              return false
          }
      }
  }

  if(pointer >  nums[ind]){
      for(let i = 1; i< nums.length - 1; i++){
          if( nums[i] < nums[i+1]){
              return false
          }
      }
  }
  return true
};
