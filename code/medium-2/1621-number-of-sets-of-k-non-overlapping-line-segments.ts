function numberOfSets(n: number, k: number): number {
    return combinations(n+k-1,2*k)%(1e9+7)
};
var combinations=(n,k)=>{
    var dp=[...Array(n+1)].map(d=>[...Array(k+1)].map(d=>1))
    for (let i = 1; i <=n; i++) 
        for (let k = 1; k <i; k++)
            dp[i][k]=(dp[i-1][k-1]+dp[i-1][k]) %(1e9+7)     
    return dp[n][k]
}
// TC O(n2)
// SC O(n2)
