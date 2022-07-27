function longestNiceSubstring(s: string): string {
    if (s.length <= 1) {
        return '';
    }
    
    const sArr = s.split(''); // all chars
    const sSet = new Set(sArr); // unique chars
    
    for (let i=0;i<=s.length-1;i++) {
        if (sSet.has(sArr[i].toLowerCase()) && sSet.has(sArr[i].toUpperCase())) {
            continue;
        }
        
        const subS1 = longestNiceSubstring(s.slice(0, i));
        const subS2 = longestNiceSubstring(s.slice(i+1));
        
        return subS1.length >= subS2.length ? subS1 : subS2;
    }
    
    return s;
};
