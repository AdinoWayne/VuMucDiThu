function addNegabinary(a: number[], b: number[]): number[] {
    // reverse first
    a = a.reverse(), b = b.reverse();

    // set c as third array, get max as number of loops
    let c = dp(Math.max(a.length, b.length));

    // remove 0
    while (c.length > 1 && c[0] == 0) {
        c.shift();
    }

    // result
    return c;

    // dp
    function dp(max, r = []) {
        for (let i = 0; i <= max; i++) {
            // fault-tolerant
            r[i] = (a[i] || 0) + (b[i] || 0) + (r[i] || 0);

            if (r[i] == -1) {
                r[i] = 1;
                r[i + 1] = 1;
                continue;
            }

            if (r[i] == 2) {
                r[i] = 0;
                r[i + 1] = -1;
                continue;
            }

            if (r[i] == 3) {
                r[i] = 1;
                r[i + 1] = -1;
                continue;
            }
        }
        return r.reverse();
    }
};
// https://en.wikipedia.org/wiki/Negative_base#Addition
// TC O(logn)
// SC O(n)
