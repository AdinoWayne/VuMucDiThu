function minFlips(a: number, b: number, c: number): number {
  let ret = 0;
  let mask = 1;
  for (let i = 1; i < 32; ++i) {
    if (((a & mask) | (b & mask)) !== (c & mask)) {
      ret += (a & mask) === mask && (b & mask) === mask ? 2 : 1;
    }
    mask <<= 1;
  }
  return ret;
};
// TC O(1)
// SC O(1)

function minFlips(a: number, b: number, c: number): number {
    let ans = 0, ab = a | b, equal = ab ^ c;
    for (let i = 0; i < 31; ++i) {
        let mask = 1 << i;
        if ((equal & mask) > 0)  // ith bits of a | b and c are not same, need at least 1 flip.
            // ans += (ab & mask) < (c & mask) || (a & mask) != (b & mask) ? 1 : 2;
            ans += (a & mask) == (b & mask) && (c & mask) == 0 ? 2 : 1; // ith bits of a and b are both 1 and that of c is 0?
    }
    return ans;
};
