function pivotArray(nums: number[], pivot: number): number[] {
    let N = nums.length;
	let output = [];
	let i = 0;
	let j = N - 1;
	let L = 0;
	let R = N - 1;
	while (i < nums.length) {
		if (nums[i] < pivot) output[L++] = nums[i];
		if (nums[j] > pivot) output[R--] = nums[j];

		i++;
		j--;
	}
	while (L <= R) {
		output[L++] = pivot;
	}
	return output;
};
// TC O(n)
// SC O(n)
