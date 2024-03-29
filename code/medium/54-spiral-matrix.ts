function spiralOrder(matrix: number[][]): number[] {
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      let val = m.pop()
      if(val)
        res.push(val)
        m.reverse()   
    }
    matrix.reverse()
  }
  return res
};
