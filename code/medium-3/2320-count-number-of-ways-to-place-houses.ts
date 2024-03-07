function countHousePlacements(n: number): any {
    const MOD = 1000000007n
    let house = 1n
    let space = 1n
    let total = house + space
    for (let i = 2; i < n + 1; i++) {
        house = space
        space = total
        total = (house + space) % MOD
    }
    return (total * total) % MOD
};
// Time Complexity: O(n)
// Space Complexity: O(1)
