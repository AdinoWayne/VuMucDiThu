function equalFrequency(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    const cur = word.slice(0, i) + word.slice(i + 1);
    const count = Object.values(
      [...cur].reduce((a, c) => {
        a[c] ? a[c]++ : (a[c] = 1);
        return a;
      }, {})
    );
    if (count.length === 1) return true;
    for (let j = 1; j < count.length; j++) {
      if (count[j] !== count[j - 1]) break;
      if (j === count.length - 1) return true;
    }
  }
  return false;
};
