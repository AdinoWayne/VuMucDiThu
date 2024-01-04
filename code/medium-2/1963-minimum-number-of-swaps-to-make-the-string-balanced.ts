function minSwaps(s: string): number {
    let l = 0, r = s.length - 1, ans = 0, open = 0;
    while(l < r) {
        s[l] == '[' ? open++ : open--;
        if(open < 0) {
            while(s[r] != '[' && r > l) r--;
            ans++, open += 2;
        }
        l++;
    }
    return ans;
};
// TC O(n)
// SC O(n)
