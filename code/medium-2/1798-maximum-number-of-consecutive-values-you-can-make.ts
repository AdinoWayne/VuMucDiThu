function getMaximumConsecutive(coins: number[]): number {
    coins.sort((x, y) => x - y);
    let res = 0;
    for (const e of coins) {
        if (e <= res + 1) res += e;
    }
    return res + 1;
};
