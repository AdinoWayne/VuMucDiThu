function optimalDivision(nums) {
	const { length } = nums;
	if (length === 1) return `${nums[0]}`;
	if (length === 2) return nums.join('/');
	return nums.reduce((result, num, index) => {
		if (index === 0) return `${num}/(`; // a
		if (index === length - 1) return result + `${num})`; // c
		return result + `${num}/`; // b
	}, '');
};

// [a,b,c] => biggest a/ (b/ c)
