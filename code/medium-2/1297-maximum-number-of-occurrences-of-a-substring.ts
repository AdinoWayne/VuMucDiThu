function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
  const substrMap = new Map();
  let max = 0;
  outer:
  for (let i = 0; i <= s.length - minSize; ++i) {
    const substr = s.substr(i, minSize);
    const letterSet = new Set();
    for (const char of substr) {
      letterSet.add(char);
      if (letterSet.size > maxLetters) continue outer;
    }
    const count = substrMap.has(substr) ? substrMap.get(substr) + 1 : 1;
    substrMap.set(substr, count);
    count > max && (max = count);
  }
  return max;
};
// Time complexity of this function is O((n - k + 1)k), where n is the length of the input string and k is the minimum size of the substring 
// Space complexity of this function is O(nk), where n is the length of the input string and k is the minimum size of the substring
