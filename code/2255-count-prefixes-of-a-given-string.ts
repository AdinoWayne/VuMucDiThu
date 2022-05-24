function countPrefixes(words: string[], s: string): number {
    return words.filter(e => s.startsWith(e)).length
};
