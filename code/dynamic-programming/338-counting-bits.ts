function countBits(n: number): number[] {
    let bits = [];
    for (let i = 0; i <= n; i++)
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};
