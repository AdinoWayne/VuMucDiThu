function minimumRounds(tasks: number[]): number {
    const counts = {};
    for (let task of tasks) {
        counts[task] = (counts[task] || 0) + 1;
    }
    let rounds = 0;
    for (let count of Object.values(counts)) {
        const num = Number(count);
        if (num < 2) {
            return -1;
        }
        rounds += Math.ceil(num / 3);
    }
    return rounds;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
