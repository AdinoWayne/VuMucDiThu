function superPow(a: number, b: number[]): number {
	const MOD = 1337;
	const pow = (num, n) => {
		let result = 1;
		for (let index = 0; index < n; index++) {
			result = result * num % MOD;
		}
		return result;
	};

	return b.reduceRight((result, n) => {
		a %= MOD;
		const powNum = result * pow(a, n) % MOD;

		a = pow(a, 10);
		return powNum;
	}, 1);
};

// Time Complexity : O(n) where n is the length of vector b.
// Space Complexity : O(1)

// (a*b) % mod = (a % mod * b % mod) % mod
