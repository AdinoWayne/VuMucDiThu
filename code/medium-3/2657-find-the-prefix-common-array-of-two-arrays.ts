function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const res = []
    const set = new Set()

    let count = 0

    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) count++
        if (set.has(B[i])) count++
        if (A[i] === B[i]) count++
        set.add(A[i])
        set.add(B[i])
        res.push(count)
    }

    return res
};
