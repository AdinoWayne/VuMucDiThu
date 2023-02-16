function nextGreaterElements(nums: number[]): number[] {
  let stack = [];
  let output = [];

 for(let i=2*(nums.length-1); i>=0; i--) {
    
    let Index = i % nums.length;
    while(stack.length > 0 && nums[Index] >= nums[stack[stack.length-1]]) {
       
        stack.pop();
    }
    
    if(stack.length === 0){
        output[Index] = -1;
    }else{
        output[Index] = nums[stack[stack.length-1]]
    }
    
    stack.push(Index);
 }

 return output;
};
