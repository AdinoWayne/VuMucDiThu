function isIsomorphic(s: string, t: string): boolean {
    let S = {};
    let T = {};
    for (let i = 0; i < s.length; i++) {
        if (S[s[i]] !== T[t[i]]) {
            return false;
        }
        S[s[i]] = i;
        T[t[i]] = i;
    }
    return true;
};
