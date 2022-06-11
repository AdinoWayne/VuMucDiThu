function validPalindrome(s: string): boolean {
    let l = -1;
    let r = s.length;
    while (++l < --r)
        if (s[l] != s[r])
            return isPalindrome(s, l+1, r) 
                || isPalindrome(s, l, r-1);
    return true;
};
function isPalindrome(s: string, l: number, r: number): boolean {
    while (l < r)
        if (s[l++] != s[r--]) return false;
    return true;
}
