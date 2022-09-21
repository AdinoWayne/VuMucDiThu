function sumBase(n: number, k: number): number {
    let a = 0;
    while (n) {
        a += Math.trunc(n % k);
        n = n / k;
    }
    return a;
};
