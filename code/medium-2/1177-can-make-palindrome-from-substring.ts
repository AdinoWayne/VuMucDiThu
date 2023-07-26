function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const freq = new Int32Array(s.length + 1);

  for (let i = 1; i <= s.length; ++i) {
    const code = s.charCodeAt(i - 1) - 97;
    freq[i] = freq[i - 1] ^ (1 << code);
  }

  return queries.map(([start, end, count]) => {
    if (count >= 13) return true;

    let data = freq[end + 1] ^ freq[start];
    let sum = 0;
    while (data > 0) {
      sum += data & 1;
      data >>= 1;
    }

    return Math.floor(sum / 2) <= count;
  });
};
