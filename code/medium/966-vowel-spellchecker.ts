function spellchecker(wordlist: string[], queries: string[]): string[] {
  const REG = /[aeiou]/g;
  const originSet = new Set();
  const spellMap = new Map();

  wordlist.forEach((word) => {
    const lowerWord = word.toLowerCase();
    const vowelWord = lowerWord.replace(REG, "_");
    originSet.add(word);
    if (!spellMap.has(lowerWord)) spellMap.set(lowerWord, word);
    if (!spellMap.has(vowelWord)) spellMap.set(vowelWord, word);
  });

  return queries.map((query) => {
    if (originSet.has(query)) return query;
    const lowerQuery = query.toLowerCase();
    if (spellMap.has(lowerQuery)) return spellMap.get(lowerQuery);
    const vowelQuery = lowerQuery.replace(REG, "_");
    if (spellMap.has(vowelQuery)) return spellMap.get(vowelQuery);
    return "";
  });
};
// TC O(n * k) where n is the length of wordlist and k is the length of queries
// SC O(n + k)
