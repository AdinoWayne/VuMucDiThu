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
