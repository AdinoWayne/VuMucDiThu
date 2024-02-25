function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const hash = [];
    let smallest = 0;
    const n = mat[0].length;
    const m = mat.length;
    const rows = new Array(m).fill(0);
    const columns = new Array(n).fill(0);

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            hash[mat[i][j]] = { row: i, col: j};
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        const { row, col } = hash[arr[i]];

        rows[row] += 1;
        columns[col] += 1;

        if (rows[row] === n || columns[col] === m) {
            smallest = i;
            break;
        }
    }

    return smallest;
};
