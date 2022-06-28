function maxPower(s: string): number {
  let max = 1;
  let currCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currCount++;
    } else {
      currCount = 1;
    }

    max = Math.max(currCount, max);
  }

  return max;
};
