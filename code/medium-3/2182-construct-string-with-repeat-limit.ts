function repeatLimitedString(s: string, repeatLimit: number): string {
    const aCode = "a".charCodeAt(0);
    const counts = new Array(26).fill(0);
    let result = "";
    let cnt, takeOne, len, lastLetter;
    
    for (let i = 0; i < s.length; ++i) {
        ++counts[s.charCodeAt(i) - aCode];
    }
    
    while (result.length < s.length) {
        takeOne = false;
        len = result.length;

        for (let i = 26; i >= 0; --i) {
            if (counts[i] > 0) {
                
                if (lastLetter === i) {
                    takeOne = true;
                    continue;
                }
                
                lastLetter = i;
                cnt = takeOne ? 1 : Math.min(counts[i], repeatLimit);
                result += String.fromCharCode(i + aCode).repeat(cnt);
                counts[i] -= cnt;
                break;
            }
        }
        
        if (result.length === len) break;
    }
    
    return result;
};
