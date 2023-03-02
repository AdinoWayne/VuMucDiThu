function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    let memo = new Map();
    const MOD = 10**9 + 7;
    
    const getWays = (currRow, currCol, move) =>{
        let key = `${currRow}#${currCol}#${move}`;
        
        if(memo.has(key)) return memo.get(key);
        if(move > maxMove) return 0;
        if(currRow < 0 || currCol < 0 || currRow >= m || currCol >= n) return 1;
       
        let count = 0;
        
        const directions = [[currRow-1, currCol], [currRow+1, currCol], [currRow, currCol-1], [currRow, currCol+1]];
        for(let [r, c] of directions){
            count = (count + getWays(r, c, move + 1)) % MOD;
        }
        
        memo.set(key, count);
        return count;
    }
    
    
    return getWays(startRow, startColumn, 0)
};
