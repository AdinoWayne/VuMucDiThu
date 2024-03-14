function canChange(start: string, target: string): boolean {
    let l = 0
    let r = 0

    for (let i = 0; i < start.length; i++) {
        if (start[i] === "R") r++
        if (start[i] === "L") l--
        if (target[i] === "L" && r > 0) return false
        if (start[i] === "L" && r > 0) return false

        if (target[i] === "L") l++
        if (target[i] === "R") r--
        if (l < 0 || r < 0) return false
    }
    return !l && !r
};
// TC O(n)
// SC O(1)
