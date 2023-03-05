function findDiagonalOrder(mat: number[][]): number[] {
    if (mat.length == 0) return [];
    let r = 0, c = 0, m = mat.length, n = mat[0].length, arr = new Array(m * n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = mat[r][c];
        if ((r + c) % 2 == 0) { // moving up
            if      (c == n - 1) { r++; }
            else if (r == 0)     { c++; }
            else            { r--; c++; }
        } else {                // moving down
            if      (r == m - 1) { c++; }
            else if (c == 0)     { r++; }
            else            { r++; c--; }
        }
    }
    return arr;
};
