function mergeAlternately(word1: string, word2: string): string {
  let res = '', i = 0;
  while (i < word1.length && i < word2.length) {
    res += word1[i] + word2[i];
    i += 1;
  }
  return res + (word1.length > word2.length ? word1.slice(i) : word2.slice(i));
};
