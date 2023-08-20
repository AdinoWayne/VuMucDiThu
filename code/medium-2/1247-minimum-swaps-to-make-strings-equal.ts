function minimumSwap(s1: string, s2: string): number {
  let n = s1.length
  // count xy & yx
  let xy = 0
  let yx = 0
  for (let i = 0; i < n; i++) {
    if (s1[i] === s2[i]) {
      // already good / equal         xx & yy case
    } else {
      //                              xy & yx case
      if (s1[i] === 'x') {
        xy++
      } else {
        yx++
      }
    }
  }
  let cc = 0
  // every 2 xy s     are     1
  if (xy) {
    if (xy % 2 === 0) {
      cc += xy / 2
      xy = 0
    } else {
      cc += Math.trunc(xy / 2)
      xy = 1
    }
  }

  // every 2 yx s     are     1
  if (yx) {
    if (yx % 2 === 0) {
      cc += yx / 2
      yx = 0
    } else {
      cc += Math.trunc(yx / 2)
      yx = 1
    }
  }
  // remaining xy & yx s generate 2 each
  if (xy && yx) {
    if (xy === yx) {
      cc += 2 * xy
      xy = 0
      yx = 0
    }
  }
  // still remaining - issue
  if (xy || yx) {
    return -1
  }
  return cc
};
// TC O(n)
// SC O(1)
