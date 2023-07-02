function mincostTickets(days: number[], costs: number[]): number {
// Initilize dp array to be the size of the last day plus 1
  let dp = new Array(days[days.length - 1] + 1);
  // Base case
  dp[0] = 0;
  // Loop through all the days
  for (let i = 1; i < dp.length; i++) {
  // If 'i' isn't in the days array we let it equal to the previous day because we don't need to buy a ticket for that day
    if (!days.includes(i)) {
      dp[i] = dp[i - 1];
	  // if dp[i] is in the days array we find the min value between our 3 cost possibilities
    } else {
      dp[i] = Math.min(
        dp[Math.max(0, i - 1)] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    }
  }
  // last element of dp will be our answer
  return dp[dp.length - 1];
};

// TC O(n)
// SC O(n)
