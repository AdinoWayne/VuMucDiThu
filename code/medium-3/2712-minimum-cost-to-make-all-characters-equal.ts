function minimumCost(s: string): number {
    const n = s.length
    let sum = 0
    for (let i = 0; i < n - 1; i++) {
        if ((i >= 0) && (s[i] !== s[i + 1])) {
        const leftAndCurrentInvertCost = i + 1
        const rightInvertCost = n - (i + 1)
        sum += Math.min(leftAndCurrentInvertCost, rightInvertCost)
        }
    }
    return sum
};
