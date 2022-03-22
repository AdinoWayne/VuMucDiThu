function heightChecker(heights: number[]): number {
    let sortH = [...heights];
    sortH.sort( (a, b) => a-b );
    let count = 0;
  
    heights.forEach((item, index) => {
        if(item !=sortH[index]){
            count ++;
        }
    })
    return count;
};
