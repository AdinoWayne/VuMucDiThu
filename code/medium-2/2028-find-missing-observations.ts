function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const diff = mean * (rolls.length + n) - rolls.reduce((a, b) => a + b);
    if (diff < n) return []; // Cannot be covered even by case 1 1 1 ...
    if (diff > 6 * n) return []; // Cannot be covered even by case 6 6 6 ...
    return Array(n)
        .fill(Math.ceil(diff / n), 0, diff % n)
        .fill(Math.floor(diff / n), diff % n);
};
// TC O(n)
// SC O(n)
