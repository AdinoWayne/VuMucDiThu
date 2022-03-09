function shortestToChar(s: string, c: string): number[] {
    let prev = Number.MAX_VALUE;
    let ans = [];
     
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] == c)
            prev = i;
        if (prev == Number.MAX_VALUE)
            ans.push(Number.MAX_VALUE);
        else
            ans.push(i - prev);
    }
 
    prev = Number.MAX_VALUE;
    for (let i = s.length - 1; i >= 0; i--)
    {
        if (s[i] == c)
            prev = i;
        if (prev != Number.MAX_VALUE)
            ans[i] = Math.min(ans[i], prev - i);
    }
    return ans;
};
