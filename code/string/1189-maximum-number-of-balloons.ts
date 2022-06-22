function maxNumberOfBalloons(text: string): number {
  let obj = {},
    balloonCount = 0;
  for (let el of text) {
    obj[el] = (obj[el] || 0) + 1;
  }

  while (obj['a'] > 0 && obj['b'] > 0 && obj['l'] > 1 && obj['n'] > 0 && obj['o'] > 1) {
    balloonCount++;

    obj['a']--;
    obj['b']--;
    obj['l'] -= 2;
    obj['n']--;
    obj['o'] -= 2;
  }

  return balloonCount;
};
