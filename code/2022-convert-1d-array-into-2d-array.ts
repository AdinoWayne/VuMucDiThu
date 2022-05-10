function construct2DArray(original: number[], m: number, n: number): number[][] {
        if(original.length != m * n) return [];
        let rets = []
        
        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if (!rets[i]) {
                    rets[i] = [];
                }
                rets[i][j] = original[i * n + j];
            }
        }
        return rets;
};
