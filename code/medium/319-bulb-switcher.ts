function bulbSwitch(n: number): number {
    let lo = 0;
    let hi = n;
    while(lo <= hi) {
         let mid = Math.floor((lo + hi) / 2);
         if (mid * mid > n) {
          hi = mid - 1;   
         }
         else {
           lo = mid + 1;  
         } 
    }
    return Math.floor(hi);
};

// Time complexity: O(logN)
// Space complexity: O(1)
