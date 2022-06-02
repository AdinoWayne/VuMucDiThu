function findTheDifference(s: string, t: string): string {
  for (let ch of [...s]) {
    t = t.replace(ch, "");
  }
  return t;
};
