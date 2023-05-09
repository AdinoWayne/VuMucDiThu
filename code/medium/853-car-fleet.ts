function carFleet(target: number, position: number[], speed: number[]): number {
    let tuples = position.map((pos,idx) => { return [pos, (target-pos)/speed[idx]] })
    tuples.sort((a, b) => a[0] - b[0])
    let stack = []
	
    const peek = () =>{
      return stack[stack.length - 1][1]
    }

    tuples.forEach(t =>{
      while(stack.length && peek() <= t[1]){
        stack.pop()
      }
      
      stack.push(t)
    })
  
    return stack.length
};
