function waysToSplit(N: number[]): number {
    let len = N.length
    for (let i = 1; i < len; i++)
        N[i] += N[i - 1]
    let max = N[len - 1], ans = 0
    if (max === 0)
        return ((len - 2) * (len - 1) / 2) % 1000000007
    for (let i = 0, j = 1, k = 1; N[i] <= max / 3; i++) {
        let lo = N[i] * 2, hi = (max + N[i]) / 2
        while (j === i || N[j] < lo)
            j++
        while (N[k] <= hi)
            k++
        ans += k - j
    }
    return ans % 1000000007
};
// TC O(n)
// SC O(n)
