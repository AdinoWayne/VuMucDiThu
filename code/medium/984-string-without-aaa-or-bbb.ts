function strWithout3a3b(A: number, B: number): string {
    if (A === 0) return "b".repeat(B);
    if (B === 0) return "a".repeat(A);
    if (A === B) return "ab" + strWithout3a3b(A - 1, B - 1);
    if (A > B) return "aab" + strWithout3a3b(A - 2, B - 1);
    return "bba" + strWithout3a3b(A - 1, B - 2);
};
