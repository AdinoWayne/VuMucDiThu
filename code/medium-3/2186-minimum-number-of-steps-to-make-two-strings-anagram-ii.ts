function minSteps(s: string, t: string): number {
    let sFreq = Array(26).fill(0), tFreq = Array(26).fill(0);
    for (let char of s) sFreq[char.charCodeAt(0) - 97]++;
    for (let char of t) tFreq[char.charCodeAt(0) - 97]++;
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        ans += Math.abs(sFreq[i] - tFreq[i]);
    }
    return ans;
};
// TC O(2n)
// SC O(1)
