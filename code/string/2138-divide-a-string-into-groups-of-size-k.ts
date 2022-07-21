function divideString(s: string, k: number, fill: string): string[] {
    const res = [];
    let str = '';
    
    for (let i = 0; i < s.length; i++) {
        str += s[i];
        
        if (str.length === k) {
            res.push(str);
            str = '';
        }
    }
    
    const n = str.length;
    
    if (n > 0) {
        for (let i = 0; i < k - n; i++) {
            str += fill;
        }    
        res.push(str);
    }
    
    return res;
};
