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
