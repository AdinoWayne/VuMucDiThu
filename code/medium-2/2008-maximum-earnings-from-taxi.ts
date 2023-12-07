function maxTaxiEarnings(n: number, rides: number[][]): number {
    if(n === 1){
        return rides[0][1] - rides[0][0] + rides[0][2];
    }
    //sort rides by end point
    rides.sort((a,b) => a[1] - b[1]);
    let dp = [];
    dp[0] = 0;
    let j = 0;
    // i will be the end point
    for(let i = 1; i <= n; i++){
        dp[i] = dp[i-1];
        //loop through rides to find ride that has an end point i
        while(j < rides.length && rides[j][1] === i){
            let tempRide = rides[j];
            let tempEarn = tempRide[1] - tempRide[0] + tempRide[2];
            dp[i] = Math.max(dp[i], dp[tempRide[0]] + tempEarn);
            j++;
        }
    }
    
    return dp[n];
};
