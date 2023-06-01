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

// We want to find how many bulbs are on after n rounds (In the end).
// That means we need to find out how many perfect square numbers are NO MORE than n.

// Time complexity: O(logN)
// Space complexity: O(1)
