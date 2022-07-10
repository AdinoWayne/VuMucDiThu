function areAlmostEqual(s1: string, s2: string): boolean {
    let n = s1.length;
    let a1 = [];
    let a2 = [];
    for (let i = 0; i < n; i++) {
        if (s1[i] != s2[i]) {
            a1.push(s1[i]);
            a2.push(s2[i]);
        }
    }
    a1.sort((x, y) => x.localeCompare(y));
    a2.sort((x, y) => x.localeCompare(y));
    if (a1.length > 2 || a2.length > 2) return false;
    if (a1[0] != a2[0] || a1[1] != a2[1]) return false;
    return true;
};
