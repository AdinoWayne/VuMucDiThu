function minimumPerimeter(neededApples: number): number {
    let start = 2, n = 1, dp = [0];
    
    while(true){
        let cur = start, res = dp[n-1];
        res += (cur + cur - n)*4;
        res += ( ((n-1)/2) *  ( ( 2 * (cur - 1) ) + ( (n-2) * -1 ) )  ) * 8
        dp[n] = res;
        if(neededApples <= res) return 8*n;
        n++;
        start +=2;
    }
};
// TC O(n)
// SC O(n)
// For n = 1 :             ( 2 * 4 ) + ( 1 * 4 ) + DP[0]
// For n = 2 :             ( 4 * 4 ) + ( 3 * 8 ) + ( 2 * 4 ) + DP[1]
// For n = 3 :             ( 6 * 4 ) + ( 5 * 8 ) + ( 4 * 8 ) + ( 3 * 4 ) + DP[2]
// For n = 4:              ( 8 * 4 ) + ( 7 * 8 ) + ( 6 * 8 ) + ( 5 * 8 ) + ( 4 * 4 ) + DP[3]
// From above we can see a pattern that the start is from 2 and at every iteration start gets added by 2
// Secondly first and the last in the above series, the count of the apples are 4 which represent the apples on the Y and X axis.
// Thirdly all the other apples interier and not on the axis are counting to 8 in every iteration
