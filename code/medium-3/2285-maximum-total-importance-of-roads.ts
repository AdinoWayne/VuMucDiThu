function maximumImportance(n: number, roads: number[][]): number {
    const edgesCount = new Array(n).fill(0);
    for (const [a, b] of roads) {
        edgesCount[a] += 1;
        edgesCount[b] += 1;
    }
    edgesCount.sort((a, b) => a - b);
    let totSum = 0;
    for (let i = n - 1; i >= 0; --i) {
        totSum += (edgesCount[i] * (i + 1));
    }
    return totSum;
};
// TC O(nlogn)
// SC O(n)
