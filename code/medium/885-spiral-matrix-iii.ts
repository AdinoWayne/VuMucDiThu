function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    let n = Math.max(rStart, cStart, rows-1-rStart, cols-1-cStart);
    let res = [[rStart, cStart]];
    for(let i=1; i<=n; i++){
    	for(let j=1-i; j<=i; j++) res.push([rStart+j, cStart+i]); //line 1
    	for(let j=i-1; j>=-i; j--) res.push([rStart+i, cStart+j]); //line 2
    	for(let j=i-1; j>=-i; j--) res.push([rStart+j, cStart-i]); //line 3
    	for(let j=1-i; j<=i; j++) res.push([rStart-i, cStart+j]); //line 4
    }
    return res.filter(x=>x[0]>=0&&x[0]<rows&&x[1]>=0&&x[1]<cols);
};

// TIme complexity: O(n2)
// Space complexity: O(n2)
