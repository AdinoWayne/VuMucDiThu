function rearrangeBarcodes(barcodes: number[]): number[] {
	const map = {};
	barcodes.forEach(b => map[b] = (map[b] || 0) + 1);
	const keys = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]);

	let idx = 1;
	for (let k of keys) {
		let t = map[k];

		for (let i = 0; i < t; i++) {
			if (idx >= barcodes.length) idx = 0;
			barcodes[idx] = parseInt(k, 10);
			idx += 2;
		}
	}

	return barcodes;
};
