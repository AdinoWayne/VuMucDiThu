function edgeScore(edges: number[]): number {
    let maxSum = -Infinity;
    const outputConfig = {};
    const edgeConfig = {};
    for (let index = 0; index < edges.length; index++) {
        const to = edges[index];
        if (!edgeConfig[to]) {
            edgeConfig[to] = 0;
        }
        const tempOutput = edgeConfig[to] + index;
        if (!outputConfig[tempOutput]) {
            outputConfig[tempOutput] = [];
        }
        outputConfig[tempOutput].push(to);
        if (tempOutput > maxSum) {
            maxSum = tempOutput;
        }
        edgeConfig[to] = tempOutput;
    }
    return Math.min(...outputConfig[maxSum]);
};
// TC O(n)
// SC O(1)
