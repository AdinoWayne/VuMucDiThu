function restoreArray(adjacentPairs: number[][]): number[] {
    let adjacentMatrix = new Map();
    for (let pair of adjacentPairs) {
        if (!adjacentMatrix.has(pair[0])) {
            adjacentMatrix.set(pair[0], [pair[1]]);
        } else {
            adjacentMatrix.get(pair[0]).push(pair[1])
        }
        if (!adjacentMatrix.has(pair[1])) {
            adjacentMatrix.set(pair[1], [pair[0]]);
        } else {
            adjacentMatrix.get(pair[1]).push(pair[0]);
        }
    }
    let start;
    for (const [key, value] of adjacentMatrix.entries()) {
        if (adjacentMatrix.get(key).length === 1) start = key;
    }
    function dfs(seen, matrix, inception) {
        let vals = matrix.get(inception);
        if (!visit.has(inception)) {
            visit.add(inception);
            seen.push(inception);
        }
        for (let i of vals) {
            if (!visit.has(i)) {
                dfs(seen, matrix, i);
            }
        }
    }
    let ans = [];
    let visit = new Set();
    ans.push(start);
    visit.add(start);
    dfs(ans, adjacentMatrix, start);
    return ans;
};
// TC O(n)
// SC O(n)
