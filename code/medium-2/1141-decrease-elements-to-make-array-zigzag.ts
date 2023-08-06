function movesToMakeZigzag(nums: number[]): number {
   let even = zig(nums, 0, 0);
   let odd = zig(nums, 0, 1);
   return Math.min(even, odd);
};

function zig(nums, style, start){
    let arr = [...nums];
    for(let i = start; i < nums.length; i += 2){
       if(arr[i] >= arr[i - 1]){
           style += arr[i] - arr[i - 1] + 1;
           arr[i] = arr[i - 1] - 1; 
       }
       if(arr[i] >= arr[i + 1]){
           style += arr[i] - arr[i + 1] + 1;
           arr[i] = arr[i + 1] - 1; 
       }
   }
   return style;
}
// Time complexity: O(n)
// Space complexity: O(1)
