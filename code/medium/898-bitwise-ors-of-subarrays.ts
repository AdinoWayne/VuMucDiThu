function subarrayBitwiseORs(arr: number[]): number {
	const bits = [];
	let L = 0;

	for (let i = 0; i < arr.length; i++) {
		const R = bits.length;
		bits.push(arr[i]); // handle subarray with only 1 number

    // create next sub-array and find bitwise OR
		while (L < R) {
			const prev = bits[bits.length - 1];
			const bitwise = bits[L] | prev; // get bitwise OR using prev bit value

			if (bitwise !== prev) bits.push(bitwise);

			L++;
		}
	}

	return new Set(bits).size; // get all unique bitwise ORs
};

// Time complexity: O(n2)
// Space complexity: O(n)
