class NumMatrix {
    data;
    constructor(matrix: number[][]) {
        this.data = matrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let square_sum = 0;
        for(let i = row1; i <= row2; i++){//row iteration, in other words x axis
            for(let j = col1; j <= col2; j++){ // column, i.e y axis
                square_sum += this.data[i][j]
            }
        }
        return square_sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
