function removePalindromeSub(s: string): number {
    if (!s) return 0
    for (let i = 0, j = s.length - 1; i < j; i++, j--)
        if (s.charAt(i) !== s.charAt(j)) return 2
    return 1
};
