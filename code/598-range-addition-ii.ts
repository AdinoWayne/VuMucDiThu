function maxCount(m: number, n: number, ops: number[][]): number {
    ops.forEach((op) => {
        m = Math.min(op[0], m);
        n = Math.min(op[1], n);
    });
    return m * n;
};
