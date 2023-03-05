function nextGreaterElements(nums: number[]): number[] {
  let stack = [];
  let output = [];

 for(let i=2*(nums.length-1); i>=0; i--) {
    
    let Index = i % nums.length;
    // nums[Index] ss with nums[lastStack]
    while(stack.length > 0 && nums[Index] >= nums[stack[stack.length-1]]) {
       //If there is less element keep removing from the top of the stack until you find the next greater element.
        stack.pop();
    }
    
    if(stack.length === 0){
        // If No lesser element found & the stack is empty, fill that index with -1.
        output[Index] = -1;
    }else{
        // Fill that index with stack's top element and insert the current element into the stack
        output[Index] = nums[stack[stack.length-1]]
    }
    
    stack.push(Index); // push the curr element into the stack.
 }

 return output;
};
// Then Insert the curr element into the stack.
// If No lesser element found & the stack has greater element than current, fill that index with the stack's top element.
// TIME COMPLEXITY = O(2N) + O(2N) ~~ O(N)
// SPACE COMPLEXITY = O(N)
