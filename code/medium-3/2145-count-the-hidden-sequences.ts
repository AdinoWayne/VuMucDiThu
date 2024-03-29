function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let dp = new Array(differences.length+1)
    
    dp[0] = 0
    let min = dp[0]
    let max = dp[0]
    for(let i = 1; i <= differences.length; i++){
        dp[i] = dp[i-1] + differences[i-1]
        min = Math.min(dp[i], min)
        max = Math.max(dp[i], max)
    }
    
    let shift = min - lower
    max = max - shift
    
    let count = upper - max + 1
    if(count <= 0){
        return 0
    }

    return count
};
// TC O(n)
// SC O(n)
