function minOperations(a: number[]): number {
    let res = 0;
    while (1) {
        if (new Set(a).size == 1 && a[0] == 0) break;
        let b = [];
        for (const x of a) { // merge two step together
            if (x & 1) {
                b.push(x - 1 >> 1);
                res++;
            } else {
                b.push(x >> 1);
            }
        }
        res++;
        a = b;
    }
    return Math.max(0, res - 1);
};
