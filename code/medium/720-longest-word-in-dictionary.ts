function longestWord(words: string[]): string {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
};

// Time complexity: O(nlogn)
// Space complexity: O(n)
