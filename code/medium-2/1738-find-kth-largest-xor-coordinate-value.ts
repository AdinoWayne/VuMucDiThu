function kthLargestValue(M: number[][], k: number): number {
    let y = M.length, x = M[0].length, ans = new Uint32Array(x*y), h = 0
    for (let i = 0; i < y; i++)
        for (let j = 0; j < x; j++) {
            let cell = M[i][j]
            if (i > 0) cell ^= M[i-1][j]
            if (j > 0) cell ^= M[i][j-1]
            if (i > 0 && j > 0) cell ^= M[i-1][j-1]
            ans[h++] = M[i][j] = cell
        }
    return ans.sort()[x*y-k]
};
// TC O(nLogn)
// SC O(n)
