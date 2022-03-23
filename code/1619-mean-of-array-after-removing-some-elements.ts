function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const five_percent = n * 0.05;
    arr = arr.slice(five_percent, n - five_percent);
    return arr.reduce((s, a) => s + a, 0) / arr.length;
};
