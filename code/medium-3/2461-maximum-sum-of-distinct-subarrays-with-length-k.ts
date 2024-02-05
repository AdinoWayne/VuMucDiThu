function maximumSubarraySum(n: number[], k: number): number {
    if (new Set(n).size < k) return 0;

    let [max, cur, freq] = [0, 0, new Map()];
    for (let i = 0; i < n.length; i++) {
        const r = n[i];
        cur += r;
        freq.set(r, (freq.get(r) || 0) + 1);

        if (i < k - 1) continue;
        if (freq.size == k) max = Math.max(max, cur);

        const l = n[i - k + 1];
        cur -= l;
        freq.set(l, (freq.get(l) || 0) - 1);
        if (freq.get(l) === 0) freq.delete(l);
    }
    return max;
};
