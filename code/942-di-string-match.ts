function diStringMatch(s: string): number[] {
    let lo = 0, hi = s.length;
    let ans = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == 'I') ans.push(lo++);
        else ans.push(hi--); 
    }
    ans.push(lo);
    return ans;
};
