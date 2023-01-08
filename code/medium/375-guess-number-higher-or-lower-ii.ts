function getMoneyAmount(n: number): number {
    let dp = [...Array(n+1)].map(row => Array(n+1).fill(0))
    
    var averageCost = function(start, end) {
        if(start >= end) {
            return 0
        }
        if(dp[start][end] > 0) {
            return dp[start][end]
        }
        let minCost = Number.MAX_SAFE_INTEGER
        for(let i = start; i <= end; i++) {
            let cost = i + Math.max(averageCost(start, i-1), averageCost(i + 1, end))
            minCost = Math.min(cost, minCost)
        }
        dp[start][end] = minCost
        return minCost
    }
    return averageCost(1,n)
};
