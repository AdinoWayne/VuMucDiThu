const stuffs = [
	{
		c: 7,
		w: 3
	},
	{
		c: 10,
		w: 4
	},
	{
		c: 20,
		w: 5
	},
	{
		c: 19,
		w: 7
	},
	{
		c: 13,
		w: 6
	},
	{
		c: 40,
		w: 9
	}
];

function fillSuitcase(arr, maxW) {
	let dp = new Array(arr.length + 1).fill(null).map(() => new Array(maxW + 1).fill(0));
	for (let i = 1; i <= arr.length; i++) {
		for (let j = 1; j <= maxW; j++) {
			if (arr[i - 1].w > j) {
				dp[i][j] = dp[i - 1][j];
			} else {
				dp[i][j] = Math.max(dp[i - 1][ j - arr[i - 1].w] + arr[i - 1].c, dp[i - 1][j])
			}
		}
	}
	return dp[dp.length -1][dp[0].length - 1];
}
const weight = 18;

fillSuitcase(stuffs, weight)

