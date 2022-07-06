const mx = Math.max;
function longestNiceSubstring(s: string): string {
    let n = s.length;
    let res = [];
    let max = 0;
    let se:any = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = s.slice(i, j + 1);
            if (isNice(sub)) {
                se.add(sub);
                max = mx(max, j - i + 1);
            }
        }
    }
    for (const e of se) {
        if (e.length == max) return e;
    }
    return '';
};

const isNice = (s) => {
    let lower:any = new Set();
    let upper:any = new Set();
    for (const c of s) {
        isLowerCaseLetter(c) ? lower.add(c) : upper.add(c);
    }
    for (const lo of lower) {
        if (!upper.has(lo.toUpperCase())) return false;
    }
    for (const up of upper) {
        if (!lower.has(up.toLowerCase())) return false;
    }
    return true;
};

const isLowerCaseLetter = (c) => {
    return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};
