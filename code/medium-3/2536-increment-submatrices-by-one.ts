function rangeAddQueries(n: number, queries: number[][]): number[][] {
    let MATRIX = [...Array(n)].map(x => Array(n).fill(0))

    queries.forEach(q => {
        let row = [q[0], q[2]]
        let col = [q[1], q[3]]
        for(let i = row[0]; i <= row[1] ; i++){
            for(let j = col[0] ; j <= col[1] ; j++){
                MATRIX[i][j]++
            }
        }

    })
    return MATRIX
};
