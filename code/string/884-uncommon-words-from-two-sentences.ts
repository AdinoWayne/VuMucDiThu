function uncommonFromSentences(A: string, B: string): string[] {
  let obj = {};
  let str = A.trim() + " " + B.trim();
  for (let word of str.split(" ")) {
    if (obj[word] === undefined) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  }
  let sol = [];
  for (let key of Object.keys(obj)) {
    if (obj[key] === 1) {
      sol.push(key);
    }
  }
  return sol;
};
