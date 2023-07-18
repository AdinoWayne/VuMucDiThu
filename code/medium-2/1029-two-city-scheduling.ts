function twoCitySchedCost(costs: number[][]): number {
    const n = costs.length / 2;
    let sum = 0;
    costs.sort((a, b) => {
       return a[0] - b[0] - (a[1] - b[1]); // aCosti - bCosti increase
    });
    
    for (let i = 0; i < n; ++i) {
        sum += costs[i][0] + costs[i + n][1];
    }
    
    return sum;
};
// TC n(Log n)
// SC O(1)
