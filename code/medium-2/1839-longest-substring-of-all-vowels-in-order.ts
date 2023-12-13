const mx = Math.max;
const t = 'aeiou';
function longestBeautifulSubstring(s: string): number {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'a') { // if want the longest, so have to keep as much as "a" comes left of "eiou", so the answer should start with "a"
            let right = i;
            let flag = 1;
            for (let j = 0; j < 5; j++) {
                if (s[right] != t[j]) {
                    flag = 0;
                    break;
                }
                while (right < n && s[right] == t[j]) right++;
            }
            if (flag) res = mx(res, right - i);
            i = right - 1;
        }
    }
    return res;
};
// TC O(n)
// SC O(1)
