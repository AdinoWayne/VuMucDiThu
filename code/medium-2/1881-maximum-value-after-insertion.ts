function maxValue(n: string, x: number): string {
    let i;
    if (n[0] !== '-') {
        for (i = 0; i < n.length; i++) {
            if (Number(n[i]) < x) break;
        }        
    } else {
        for (i = 1; i < n.length; i++) {
            if (Number(n[i]) > x) break;
        }
    }
    return n.slice(0, i) + x + n.slice(i)
};
// TC O(n)
// SC O(1)
