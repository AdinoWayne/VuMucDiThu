function projectionArea(grid: number[][]): number {
    const xy = grid.reduce((acc,curr)=>{
        const area = curr.filter(value => value>0).length
        return acc + area
    },0)
    
    const yz = grid.reduce((acc,curr) => {
        const max =  Math.max(...curr) 
        return acc + max
      },0)

    const xz = grid[0].reduce((acc,curr,index) => {
        const vertical =  grid.map(value =>{
          return value[index]
        })
        const max =  Math.max(...vertical) 
        return acc + max
      },0)

      return xy+yz+xz 
};
