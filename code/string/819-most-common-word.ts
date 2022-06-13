function mostCommonWord(paragraph: string, banned: string[]): string {
  const bannedSet = new Set(banned);
  // Split on each alphanumeric word
  const words = paragraph.toLowerCase().split(/\W+/).filter(el => el);
  const map = {};
  for (const w of words) {
    // Count occurrence of each word in words  
    if (!bannedSet.has(w)) {
      if (map[w] == null) map[w] = 0;
      map[w]++;
    }
  }

  let res = '';
  let max = Number.MIN_SAFE_INTEGER;
  for (const w in map) {
    const count = map[w];
    if (count > max) {
      res = w;
      max = count;
    }
  }
  return res;
};
