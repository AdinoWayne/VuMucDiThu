function minOperations(s: string): number {
    let chars = ['1','0']
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (chars[i % 2] === s[i]) {
            count++;
        }
    }
    return Math.min(count, s.length - count)
};
