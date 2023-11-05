function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
   if (ladders >= heights.length-1)
       return heights.length-1;
   
   const dp = new Array(heights.length).fill(-Infinity);
   dp[0] = bricks;
   
   let res = 0, diff;
   for (let i = 0; i <= ladders; i++) {
       let pre = dp[0];
       
       for (let j = 1; j < heights.length; j++) {
           if (heights[j] <= heights[j-1]) {
               [pre, dp[j]] = [dp[j], dp[j-1]];
           } else {
               diff = heights[j] - heights[j-1];
               let temp = dp[j];
               
               if (i === 0)
                   dp[j] = dp[j-1] - diff;
               else
                   dp[j] = Math.max(dp[j-1]-diff, pre);
              
               if (dp[j] < 0)
                   break;
              
               pre = temp;
           }
           res = Math.max(j, res);
       }
       if (res+(ladders-i) >= heights.length-1)
           return heights.length-1;
   }
   return res;
};
Time Complexity: O(n2)
Space Complexity: O(n)
