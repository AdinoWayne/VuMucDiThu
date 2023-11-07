function minimumJumps(forbidden: number[], a: number, b: number, x: number): number {
  const visited: any = new Set(forbidden);
  const limit = 2000 + a + b;
  const q = [[0,  0, true]];

  while(q.length){
    const [current, jumps, backJump] = q.shift();
    if(current == x )
      return Number(jumps);
    
    if(visited.has(current))
      continue;
    
    visited.add(current);
    let nextJump
    if(backJump){
      nextJump = Number(current) - b;
      if(nextJump >= 0)
        q.push([nextJump, Number(jumps)+1, false]) 
      }
      
    nextJump = Number(current) + a;
    if(nextJump <= limit)
      q.push([nextJump, Number(jumps)+1, true])
  }
  return -1;
};
// Time Complexity: O(N)
// Space Complexity: O(N)
