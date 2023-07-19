function numMovesStones(a: number, b: number, c: number): number[] {
    let arr = [a,b,c].sort((a,b) => a - b);
    
    // the num of moves that the last stone can make is the maximum
    const max = arr[2] - arr[0] - 2;
    
    // Normally, the num of minimum moves is which is moving `b` next to `a`, then moving `c` next to `b`
    let min = 2;
    
    // if there are no gaps between  `c` and `b`, or `b` and `a`, the num of minimum moves is 1
    if (arr[2] - arr[1] < 3 || arr[1] - arr[0] < 3) min = 1;
    
    // if these three stones are adjacent, there are no moves can be made
    if (arr[2] - arr[1] === 1 && arr[1] - arr[0] === 1) min = 0;
    
    return [min, max];
};
// TC O(nlogn)
// SC O(1)
