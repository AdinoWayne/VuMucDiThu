function getHappyString(n: number, k: number): string {
    function permute(str) {
        if(str.length === n) return --k ? false : str;
        
        for(let c of 'abc') {
            if(c === str[str.length-1]) continue;
            const val = permute(str+c);
            if(val) return val;
        }
        return false;
    }
    return permute('') || '';
};

