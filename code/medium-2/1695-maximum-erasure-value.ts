function maximumUniqueSubarray(N: number[]): number {
    let a = new Int8Array(10001), sum = 0, max = 0, len = N.length
    for (let l = 0, r = 0; r < len; r++) {
        a[N[r]]++, sum += N[r]
        while (a[N[r]] > 1) a[N[l]]--, sum -= N[l++]
        max = sum > max ? sum : max
    }
    return max
};
// Time Complexity: O(n)
// Space Complexity: O(n)
