function isPrefixString(s: string, words: string[]): boolean {
    let t = '';
    for (const w of words) {
      t += w;
      if (t.length >= s.length) break;
    }
    return t == s;
};
