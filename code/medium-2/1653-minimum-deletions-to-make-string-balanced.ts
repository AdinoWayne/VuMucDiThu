function minimumDeletions(s: string): number {
  let lena = 0;
  let lenb = 0;
  for (let ch of s) {
    if ('a' == ch) {
      ++lena;
    } else {
      lenb = Math.max(lena, lenb) + 1;
    }
  }

  return s.length - Math.max(lena, lenb);
};
