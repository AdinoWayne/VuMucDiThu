function thousandSeparator(n: number): string {
  return (''+n)
    .split('')
    .reverse()
    .reduce((a, ch) => a.length%4 == 3 ? ch+'.'+a : ch+a, '');
};
