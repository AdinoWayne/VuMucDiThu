function numSpecial(mat: number[][]): number {
         const m = mat.length;
         const n = mat[0].length;
         let rows = [];
         let cols = [];
         for (let i = 0; i < m; i++) {
             for (let j = 0; j < n; j++) {
                 if (mat[i][j] == 1) {
                     rows[i] ? rows[i] += 1 :  rows[i] = 1
                     cols[j] ? cols[j] += 1 :  cols[j] = 1
                 }
             }
         }
 
         let count = 0;
         for (let i = 0; i < m; i++) {
             for (let j = 0; j < n; j++) {
                 if (mat[i][j] == 1 && rows[i] == 1 && cols[j] == 1) {
                     count++;
                 }
             }
         }
         return count;
};
