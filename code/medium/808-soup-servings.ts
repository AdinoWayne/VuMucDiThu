/* eslint-disable no-console */
function soupServings(N) {
    let memo = new Map();
    const dfs = (a, b) => {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;
        let spoon = a + ':' + b;
        if (!memo.has(spoon)) {
            memo.set(spoon, 0.25 * (dfs(a - 100, b) + dfs(a - 75, b - 25) + dfs(a - 50, b - 50) + dfs(a - 25, b - 75)));
        }
        return memo.get(spoon);
    };
    return N >= 4800 ? 1 : dfs(N, N);
};

<!--
Time complexity: O(n^2)
Space complexity: O(n^2)
-->
