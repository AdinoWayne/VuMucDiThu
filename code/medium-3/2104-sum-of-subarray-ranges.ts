function subArrayRanges(nums: number[]): number {
    const N = nums.map(n => -n)
	return getMaxRange(nums) + getMaxRange(N)

	function getMaxRange(nums) {
		/**
		 * Monotonic stack initialized with a -1 for potential edge cases where we have...
		 * no values in the stack and we wanna calculate the left range of the poped number.
		 */
		const S = [-1]
		nums.push(Infinity)
		let res = 0
		for (let i = 0; i < nums.length; i++) {
			/**
			 * If we're poping values that're smaller than us that mean we gonna end up with a...
			 * boundary to our left that's greater than us, meaning we extended our range to include...
			 * all of the values that're smaller than us, meaning we got the full left range...
			 * in which we are the max.
			 */
			/**
			 * We will get the right range when a value from future position in the array pop us out...
			 * that's why we have an Infinity value at the end of the array that will pop the last...
		  	 * number out!
			 */
			while (nums[S[S.length - 1]] < nums[i]) {
				const MOST_MAX = S.pop(),
					LEFT_BOUNDARY = S[S.length - 1]
				const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY,
					RIGHT_RANGE = i - MOST_MAX
				/**
				 * By multiplying all these 3 values we get exactly how many times this number...
				 * was a max in its range!
				 */
				res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE
			}
			S.push(i)
		}
		return res
	}
};
