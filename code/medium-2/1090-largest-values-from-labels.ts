function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
    let avl = values //
        .map((v, i) => [v, labels[i]])
        .sort((a, b) => b[0] - a[0]);
    let m = new Map();
    let sum = 0;
    for (let [v, l] of avl) {
        if (!numWanted) break;
        if (m.get(l) >= useLimit) continue;
        m.set(l, (m.get(l) || 0) + 1);
        sum += v;
        numWanted--;
    }
    return sum;
};
// TC O(n log n)
// SC O(n)
