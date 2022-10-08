function commonFactors(a: number, b: number): number {
    let aFactors = new Set()
    let count = 0

    for (let i = 1; i <= a; i++) {
        if (a % i === 0) aFactors.add(i)
    }
    for (let j = 1; j <= b; j++) {
        if (aFactors.has(b / j)) count++
    }

    return count
};
