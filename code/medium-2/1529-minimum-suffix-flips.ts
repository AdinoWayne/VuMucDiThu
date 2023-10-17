function minFlips(target: string): number {
    let current = 0;
    let result = 0;

    for (const value of target) {
        if (current === +value) continue;
        current ^= 1;
        result += 1;
    }
    return result;
};
// TC O(n)
// SC O(1)
