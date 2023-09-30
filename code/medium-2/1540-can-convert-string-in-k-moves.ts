function canConvertString(s: string, t: string, k: number): boolean {
    if (s.length !== t.length) return false;
    const convertCounts = Array(26).fill(0);

    for (let index = 0; index < s.length; index++) {
        const diff = (t.charCodeAt(index) - s.charCodeAt(index) + 26) % 26;
        
        if (!diff) continue;
        if (diff + convertCounts[diff] * 26 > k) return false;
        convertCounts[diff] += 1;
    }
    return true;
};
