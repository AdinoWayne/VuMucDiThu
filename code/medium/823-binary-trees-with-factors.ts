function numFactoredBinaryTrees(arr: number[]): number {
	const MODULO = 10 ** 9 + 7;
	const dp = new Map();

	arr.sort((a, b) => a - b);

	for (let a = 0; a < arr.length; a++) {
		const numA = arr[a];
		dp.set(numA, 1);

		for (let b = 0; b < a; b++) {
			const numB = arr[b];
			if (numA % numB !== 0 || !dp.has(numA / numB)) continue;
			const dpA = dp.get(numA);
			const dpB = dp.get(numB);
			const another = dp.get(numA / numB);

			dp.set(numA, (dpA + dpB * another) % MODULO);
		}
	}
	return [...dp.values()].reduce((sum, count) => (sum + count) % MODULO);
};
