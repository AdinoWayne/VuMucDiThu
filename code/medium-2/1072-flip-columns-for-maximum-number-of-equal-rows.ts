function maxEqualRowsAfterFlips(matrix: number[][]): number {
    let hist = {};
    let max = 0;
    
    for (let row of matrix) {
        let one = '',two = '';
        for (let col = 0; col < row.length; col++) {
            let val = row[col];
                        
            //0's are c, 1's are s
            one += val === 0 ? 'c' : 's';
            //0's are s, 1's are c
            two += val === 0 ? 's' : 'c';
        }

        hist[one] = (hist[one] || 0) + 1;
        hist[two] = (hist[two] || 0) + 1;
        max = Math.max(max, hist[one], hist[two]);
    }
    return max;
};
