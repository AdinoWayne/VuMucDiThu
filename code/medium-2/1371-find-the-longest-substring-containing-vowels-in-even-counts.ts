function findTheLongestSubstring(s: string): number {
    let n = s.length, m = new Map([[0, -1]]), res = 0, cur = 0, mask = [1, 2, 4, 8, 16];
    for (let i = 0; i < n; i++) {
        let idx = 'aeiou'.indexOf(s[i]);
        if (idx != -1) cur ^= mask[idx];
        if (!m.has(cur)) m.set(cur, i); // set min index for cur
        let len = i - m.get(cur);
        res = Math.max(res, len);
    }
    return res;
};
// TC O(1)
// SC O(1)
