function maximumGain(s: string, X: number, Y: number): number {
    const S = s.split('')
    let len = S.length, ans = 0, a = "a", b = "b", i, j
    if (Y > X) [a,b,X,Y] = [b,a,Y,X]
    for (let t = 0; t < 2; t++) {
        for (i = j = 2; j <= len; S[i++] = S[j++])
            if (i > 1 && S[i-2] === a && S[i-1] === b)
                ans += X, i -= 2
        if (!t) len = i - 1, S.splice(len), [a,b,X,Y] = [b,a,Y,X]
    }
    return ans
};
// TC O(n2)
// SC O(n)
