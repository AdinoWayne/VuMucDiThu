function addSpaces(s: string, spaces: number[]): string {
    let res = '';
    let l = 0;
    for (const r of spaces) {
        let t = s.slice(l, r);
        l = r;
        res += t;
        res += ' ';
    }
    let last = s.slice(l);
    res += last;
    return res;
};
