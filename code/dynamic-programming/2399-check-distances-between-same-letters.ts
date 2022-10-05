function checkDistances(s: string, distance: number[]): boolean {
    const firstIndex = Array(26).fill(-1);
	
	for(let index = 0; index < s.length; index++) {
		const charCode = s[index].charCodeAt(0) - 'a'.charCodeAt(0);
		
		if(firstIndex[charCode] !== -1)
			if(index - firstIndex[charCode] - 1 !== distance[charCode])
				return false;
		
		firstIndex[charCode] = index;
	}
	
	return true;
};
