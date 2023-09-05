function canConstruct(s: string, k: number): boolean {
    // return false if length of string is less than k
    if(s.length<k) {
        return false;
    }
    // compute frequency of each char in string
    let map = new Map();
    for(let letter of s) {
        map.set(letter,(map.get(letter)||0)+1);
    }
	// return true is size of map is equal to k
    if(map.size === k) {
        return true;
    }
	// return true or false based on if the odd char count is less than K, or greater than or equal to K.
    let count = 0;
    for(let key of map.keys()) {
        count += map.get(key)%2
    }
    return count<=k;
};
