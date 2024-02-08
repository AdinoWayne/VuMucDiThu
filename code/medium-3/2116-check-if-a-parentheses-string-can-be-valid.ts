function canBeValid(s: string, locked: string): boolean {
    let flip = 0;
    let open = 0;
    let close = 0;
    if(s.length % 2) {
        return false;
    }
    for(let i = 0; i< s.length; i++) {
        if(!+locked[i]) {
            ++flip;
        } else {
            if(s[i] == "(") {
                ++open;
            } else {
                ++close;
            }
        }
        if(flip + open < close) {
            return false;
        }
    }
    flip = 0; open = 0; close = 0;
    for(let i = s.length-1; i>=0; i--) {
        if(!+locked[i]) {
            ++flip;
        } else {
            if(s[i] == "(") {
                ++open;
            } else {
                ++close;
            }
        }
        if(flip + close < open) {
            return false;
        }
    }
    return true;
};
// TC O(n^2) 
// SC O(1)
