function numSub(s: string): number {
    let result = 0;
    let len = 0;    
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "1") {
            len++;
            result += len;
        } else {
            len = 0;
        }
    }
    
    return result % 1000000007;
};
// TC O(n)
// SC O(1)
