function maxTwoEvents(events: number[][]): number {
    let d = [], res = 0, maxPreSum = 0;
    for (const [start, end, sum] of events) {
        d.push([start, sum, 1]);
        d.push([end, sum, -1])
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return y[2] - x[2];
    });
    for (const [, sum, flag] of d) {
        if (flag == -1) {
            maxPreSum = Math.max(maxPreSum, sum);
        } else {
            res = Math.max(res, maxPreSum + sum);
        }
    }
    return res;
};
// TC O(nLogn)
// SC O(n)
