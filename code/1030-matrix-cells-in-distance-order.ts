function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
         let res = [];
         let index = 0;
         for (let i = 0; i < rows; i++) {
             for (let j = 0; j < cols; j++) {
                 res[index] = [i, j];
                 index++;
             }
         }
 
         res.sort((a, b) => Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) - Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter));
         return res;
};
