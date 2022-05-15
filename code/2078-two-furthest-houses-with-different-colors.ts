function maxDistance(colors: number[]): number {
    let ans = 0;
    const n = colors.length;
    let a, b
    for (let i = 0; i < n; ++i) {
        a = colors[i] != colors[0] ? 1 : 0;
        b = colors[i] != colors[n - 1] ? 1 : 0;
        ans = Math.max(ans, i * a, (n - i - 1) * b)
    }
    return ans;
};
