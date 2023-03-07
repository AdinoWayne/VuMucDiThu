function findLUSlength(strs: string[]): number {
	strs.sort((a, b) => b.length - a.length);
	const isSubsequence = (a, b) => {
		const A_LENGTH = a.length;
		const B_LENGTH = b.length;
		if (A_LENGTH > B_LENGTH) return false;
		if (a === b) return true;
		const matches = [...b].reduce((pos, str) => {
			return a[pos] === str ? pos + 1 : pos;
		}, 0);
		return matches === A_LENGTH;
	}

	for (let a = 0; a < strs.length; a++) {
		let isUncommon = true;

		for (let b = 0; b < strs.length; b++) {
			if (a === b) continue;
			if (isSubsequence(strs[a], strs[b])) {
				isUncommon = false;
				break;
			}
		}
		if (isUncommon) return strs[a].length;

	}
	return -1;
};
// time complexity is O(n^2 * m) where n is the length of the input array and m is the maximum length of the strings in the array
// space complexity is O(1) 
