function prefixCount(words: string[], pref: string): number {
    return words.filter(e => e.startsWith(pref)).length
};
