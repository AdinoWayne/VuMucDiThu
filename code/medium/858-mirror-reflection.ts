function mirrorReflection(p: number, q: number): number {
	let ext = q, ref = p;
	
	while (ext % 2 == 0 && ref % 2 == 0) {
		ext /= 2;
		ref /= 2;
	}

	// ext * p = ref * q
	if (ext % 2 == 0 && ref % 2 == 1) return 0;
	if (ext % 2 == 1 && ref % 2 == 1) return 1;
	if (ext % 2 == 1 && ref % 2 == 0) return 2;
	
	return -1;
};
// summary:  [ext, ref] = [odd, odd] (1) ; [even, odd] (0) ; [odd, even] (2)
// Time complexity: O(log(max(p, q)))
// Space complexity: O(1)
// ref: https://www.youtube.com/watch?v=_xIBOUWEq1c&ab_channel=AlgorithmsMadeEasy
