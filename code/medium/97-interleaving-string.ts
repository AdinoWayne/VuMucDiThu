function isInterleave(s1: string, s2: string, s3: string): boolean {
  let queue = [[0, 0, 0]];
  let set = new Set();
  
  while (queue.length) {
    let [one, two, three] = queue.shift(); // indices of s1, s2, and s3
	
    if (set.has(`${one}-${two}`)) continue;   // Skipping any duplicates.
    set.add(`${one}-${two}`); 
    
	// if all indices are same as their length we basically found our answer so return true;
    if (three === s3.length && one === s1.length && two === s2.length) return true;
    
	// we enqueue the next possibles
    if (one < s1.length && s3[three] === s1[one]) queue.push([one + 1, two, three + 1]);
    if (two < s2.length && s3[three] === s2[two]) queue.push([one, two + 1, three + 1]);
  }
  
  // Our queue is empty which means we tried every possible combination, so return false;
  return false; 
};
