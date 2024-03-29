function largestOverlap(img1: number[][], img2: number[][]): number {
	const img1Values = [];
	const img2Values = [];
	const n = img1.length;
	const overlapMap = new Map();

	for (let a = 0; a < n; a++) {
		for (let b = 0; b < n; b++) {
			//  find n push coordinate has value 1
			img1[a][b] && img1Values.push({ row: a, col: b });
			img2[a][b] && img2Values.push({ row: a, col: b });
		}
	}

	img1Values.forEach(one => {
		img2Values.forEach(two => {
			// difference row n col
			const OffestKey = `${one.row - two.row}-${one.col - two.col}`;
			const overlap = overlapMap.get(OffestKey) ?? 0;
			overlapMap.set(OffestKey, overlap + 1);
		});
	});

	return Math.max(...overlapMap.values(), 0);
};

<!--
Time complexity: O(n^2 + m)
Space complexity: O(n^2)
-->
