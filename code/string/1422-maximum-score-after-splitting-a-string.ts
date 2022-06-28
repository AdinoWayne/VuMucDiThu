function maxScore(s: string): number {
   let ones = 0;
    for (let c of s) {
        if (c == '1') ++ones;
    }
      
    let zeros = 0;
    let ans = 0;
    for (let i = 0; i < s.length - 1; ++i) {
      if (s[i] == '0') ++zeros;
      else --ones;
      ans = Math.max(ans, zeros + ones);
    }
    return ans;
};
