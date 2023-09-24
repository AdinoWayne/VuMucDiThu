function entityParser(text: string): string {
    const n = text.length;
    const ent = {
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/"
    };
    
    let res = "";
    let start = 0;
    
    while (start < n) {
        const startChar = text.charAt(start);
        
        if (startChar != "&") {
            res += startChar;
            start++;
            continue;
        }
        
        let str = "&";
        let end = start + 1;
        
        while (end < n) {
            const endChar = text.charAt(end);
            
            if (endChar === ";") {
                str += endChar;
                
                res += ent[str] ?? str;
                
                str = "";
                end++;
                break;
            }
            else if (endChar === "&") {
                res += str;
                str = "";
                break;
            }
            else {
                str += endChar;
                end++;
            }
        }
        
        res += str;
        start = end;
    }
    
    return res;
};
// TC O(n)
// SC O(1)
