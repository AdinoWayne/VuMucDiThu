function arrayRankTransform(arr: number[]): number[] {
  let copy = [...arr];
  copy.sort((a, b) => a - b);
  let rank = {};
  let n = 0
  for(let i = 0; i < copy.length; i++) {
      if (rank[copy[i]] == undefined) {
         rank[copy[i]] = n + 1;
         n += 1;
    }
  }
  return arr.map(el => rank[el])
};
