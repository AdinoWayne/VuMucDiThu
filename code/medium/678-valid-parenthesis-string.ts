function checkValidString(s: string): boolean {
  let lo = 0;
  let hi = 0;
  
  for (let char of s) {
    if (char === '(') {
      hi++;
      lo++;
      continue;
    }
    
    if (char === ')' && hi === 0) {
      return false;
    }
    
    if (char === ')') {
      hi--;
      lo = Math.max(0, lo - 1);
      continue;
    }
    
    hi++;
    lo = Math.max(0, lo - 1);
  }
  
  return lo === 0;
};
// The common idea is simply the same as if we would not have *: calculate the balance between ( and ) characters.
// At the end the balance should be 0 for the valid string.
