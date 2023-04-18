function numMatchingSubseq(S: string, words: string[]): number {
  let count = 0
  const map = new Map()
  
  for(const w of words){
    map.set(w, (map.get(w) || 0) + 1)
  }
  
  for (let [w, val] of map) {
    let i = 0, j = 0
    while (j < w.length && i < S.length) {
      if (w[j] == S[i]) {
        j += 1
        i += 1
      }else {
        i += 1
      }
    }
    if (j == w.length) {
      count += map.get(w)
    }    
  }
  return count
};
