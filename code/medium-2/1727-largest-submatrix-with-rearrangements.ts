function largestSubmatrix(M: number[][]): number {
    let y = M.length, x = M[0].length, ans = 0
    for (let i = 1; i < y; i++)
        for (let j = 0; j < x; j++)
            if (M[i][j]) M[i][j] += M[i-1][j]
    for (let i = 0; i < y; i++) {
        let row = M[i].sort((a,b) => b - a)
        for (let j = 0; j < x; j++)
            ans = Math.max(ans, (j + 1) * row[j])
    }
    return ans
};
// TC O(nm log m)
// SC O(m log m)
