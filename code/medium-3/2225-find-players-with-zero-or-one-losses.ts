function findWinners(matches: number[][]): number[][] {
    let p = new Set();
    let ml = new Map();

    for (let [w, l] of matches) {
        p.add(w);
        p.add(l);
        ml.set(l, (ml.get(l) || 0) + 1);
    }

    let ans = [[], []];
    for (let x of p) {
        if (ml.has(x) === false) ans[0].push(x);
        if (ml.get(x) === 1)     ans[1].push(x);
    }
    return ans.map((arr) => arr.sort((a, b) => a - b));
};
// Time Complexity: O(n * log n)
// Space Complexity: O(n)
