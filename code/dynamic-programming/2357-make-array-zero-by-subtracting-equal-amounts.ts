function minimumOperations(nums: number[]): number {
	let set = new Set();

	nums.forEach((el) => (el !== 0 ? set.add(el) : 0));

	return set.size;
};
