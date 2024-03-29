function minEatingSpeed(piles: number[], h: number): number {
	let min = 1,
	    max = Math.max(...piles),
	    best = max
 	const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)

	while (min <= max) {
		const mid = Math.floor((min + max) / 2)

		if (time(mid) <= h) {
		    best = mid
		    max = mid - 1
		} else
		    min = mid + 1
	}
	return best
};

// Time complexity: O(n)
// Space complexity: O(1)
