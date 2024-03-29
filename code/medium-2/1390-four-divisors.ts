function sumFourDivisors(nums: number[]): number {
  let 
    thisInt, // to avoid remaking same var
    thisLookup, // to avoid remaking same var 
    div1, // first divisor
    div2, // second divisor
    solNum = 0, // solution in number form to return 
    lookup = {}, // keep track of all past solutions
    hasTwo, // keep track of num of matches
    len = nums.length - 1, // only fetch once
    stepSize // if odd, cannot be divisible by even numbers so 2
  
  for (let i = 0; i <= len; i++) {    
    thisInt = nums[i]      
    thisLookup = lookup[thisInt]
    hasTwo = false 
    stepSize = thisInt % 2 ? 2 : 1
    
    // to avoid looking up divisors if already calculated ([] counts for true @ if)
    if (thisLookup) hasTwo = thisLookup.length == 2;
    // if haven't calculated this number's divisors
    else {
      thisLookup = []
      // parse div1 from 2 (1 is implied) or 3 (for odd #) to thisInt (step 2 for odd #) 
      // (a,b,c) means do a, do b, return c
      for (
        div1 = stepSize + 1; // initialize
        div2 = thisInt / div1, div1 <= div2; // each step check last
        div1 += stepSize // each step
      ) {        
        // check if divisible (truncated equals number)
        // << 0 is fastest trunc method (https://jsperf.com/truncating-decimals/13)
        if (div2 << 0 == div2) {
          // if already found 2, this match is going to be too much, so stop          
          // if other factor is same, means odd # of divisors, so also stop
          if (hasTwo || div2 == div1) { hasTwo = false; thisLookup = []; break }
          
          // if first divisor (div1) works, then num/divisor also works             
          // add both factors to look up table
          thisLookup = [div1, div2]
          hasTwo = true
        }      
      }
      // update lookup table
      lookup[thisInt] = thisLookup
    } 
    
    // if has 2, that's 4 with 1 and self, so add to solution sum
    if (hasTwo) solNum += 1 + thisLookup[0] + thisLookup[1] + thisInt    
    
  }  
  return solNum
};
// TC O(n * sqrt(m)
// SC O(n)
