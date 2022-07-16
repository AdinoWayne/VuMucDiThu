function minimumMoves(s: string): number {
    const len = s.length
    let result = 0
    for (let i = 0; i < len; ) {
        const ch = s[i]
        if (ch === 'O') i++
        else {
            result++
            i += 3
        }
    }
    return result
};
