function makesquare(matchsticks: number[]): boolean {
	if (matchsticks.length < 4) 
		return false;
		
	let sum = 0;
	for (const match of matchsticks) 
		sum += match;
		
	if (sum % 4 != 0) 
		return false;
	
	matchsticks.sort((a, b) => b - a);

    const sums = Array(4).fill(0);
	
	function dfs(index, target) {
		if (index > matchsticks.length - 1) 
			return true;
			
		const seen = new Set();

		for (let i = 0; i < 4; i++) {
			if (sums[i] + matchsticks[index] > target || seen.has(sums[i]))
				continue;
			
            seen.add(sums[i]);
			sums[i] += matchsticks[index];
			
			if (dfs(index + 1, target)) 
				return true;
				
			sums[i] -= matchsticks[index];
		}
		
		return false;
	}
	
	return dfs(0, sum / 4);
};
// Time complexity: O(4^N)
// Space complexity: O(N)
