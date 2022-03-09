function numberOfLines(widths: number[], s: string): number[] {
    let a = [0];
    for (let i = 0; i < s.length; i++) {
        if (a[a.length - 1] + widths[s.charCodeAt(i) - 97] <= 100) {
            a[a.length - 1] = a[a.length - 1] + widths[s.charCodeAt(i) - 97]
        } else {
            a[a.length] = widths[s.charCodeAt(i) - 97];
        }
    }
    return [a.length, a[a.length -1]];
};
