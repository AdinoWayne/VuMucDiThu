function numSpecialEquivGroups(words: string[]): number {
  const groupSet = new Set();
  words.forEach(a => groupSet.add(transform(a)));
  return groupSet.size;
};

const transform = S => {
  const even = S.split('').filter((_, i) => i % 2 === 0);
  const odd = S.split('').filter((_, i) => i % 2 === 1);
  even.sort();
  odd.sort();
  return `${even.join('')}${odd.join('')}`;
};

// Time complexity: O(n2LogN)
// Space complexity: O(n2)
