function hasAllCodes(s: string, k: number): boolean {
    let count = 0;
    const target = Math.pow(2,k);
    const set = new Set();
    
    for (let i = 0; i < s.length-k+1; i++) {
        set.add(s.substring(i, i+k));
    }
    
    return set.size == target;
};
// TC O(n2)
// SC O(2^n)
