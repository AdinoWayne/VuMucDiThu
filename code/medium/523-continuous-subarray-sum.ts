function checkSubarraySum(nums: number[], k: number): boolean {
	let sum = 0
	
	let prefix = 0;
	
	const hash = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (k != 0) sum %= k

		if(hash.has(sum)) return true

		hash.add(prefix);
		prefix = sum;
	}
	return false
};
// Time complexity is O(n)
// Space complexity is also O(n)

// (currCumSum - pastCumSum) % k = 0
// (currCumSum % k - pastCumSum % k) % k = 0 and currCumSum % k is between [0, k - 1] and pastCumSum % k is between [0, k - 1]
// currCumSum % k - pastCumSum % k = 0 => currCumSum % k = pastCumSum % k
