function numWays(s: string): number {
    const numberOfOnes = s.replace(/0/g, '').length;
    
    if(numberOfOnes%3) return 0;

    const n = s.length, mod = 10**9 + 7;
    	
	// we have the options to cut at n-1 places but we need to choose 2
	// E.g. "0|0|0|0|0|0" for length 6 we can cut at 5 places of which we choose 2
	// Thus, n-1 comination 2 | C(n-1, 2)
    if(!numberOfOnes) return ((n-1)*(n-2)/2) % mod;
    
    const onesPerGroup = numberOfOnes/3;
    let firstCut = 0, secondCut = 0, countOnes = 0;
    
    for(let c of s) {
        if(+c) countOnes++;
        if(countOnes === onesPerGroup) firstCut++;
        else if(countOnes === onesPerGroup*2) secondCut++;
    }
    return (firstCut * secondCut) % mod;
};
