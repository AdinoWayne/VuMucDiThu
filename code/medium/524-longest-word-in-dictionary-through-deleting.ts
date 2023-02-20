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
