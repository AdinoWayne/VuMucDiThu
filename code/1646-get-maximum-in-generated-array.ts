function getMaximumGenerated(n: number): number {
    if (n < 2) {
        return n
    }
    let newList = new Array(n + 1).fill(0);
    newList[0] = 0
    newList[1] = 1
    for (let i = 2; i <= n; i++) {
        newList[i] = newList[Math.floor(i / 2)] + i % 2 * newList[Math.floor(i / 2) + 1]
    }
    return Math.max(...newList)
};
