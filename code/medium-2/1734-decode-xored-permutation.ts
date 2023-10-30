function decode(encoded: number[]): number[] {
    let len = encoded.length, first = (len + 2 >> 1) % 2
    for (let i = 1; i < len; i += 2) first ^= encoded[i]
    let perm = [first]
    for (let i = 0; i < len; i++) perm[i+1] = perm[i] ^ encoded[i]
    return perm
};
