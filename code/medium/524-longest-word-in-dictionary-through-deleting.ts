function findLongestWord(s: string, d: string[]): string {
    d.sort((a, b) => {
        if(a.length === b.length) {
            return a.localeCompare(b);
        }
        return b.length - a.length
    });

    for(let i=0;i<d.length;i++) {
        let l = 0;
        let r = 0;
        
        while(r < s.length) {
            if(s[r] === d[i][l]) {
                r++;
                l++
            } else {
                r++;
            }
        }
        
        if(l === d[i].length) {
            return d[i];
        }
    }
    
    return '';
};

// TC: O(n * k * log(k)) where n is the length of string s, k is the length of array d, and log(k) is the time complexity of sorting the array.
// SC: O(1) - The space used is constant, as it does not depend on the input size.
