function grayCode(n: number): number[] {
    if (n === 0) return [0];
    const res = grayCode(n - 1);
    const mask = 1 << n - 1;
    for (let i = res.length - 1; i >= 0; i--) {
        res.push(res[i] | mask);
    }
    return res;
};
