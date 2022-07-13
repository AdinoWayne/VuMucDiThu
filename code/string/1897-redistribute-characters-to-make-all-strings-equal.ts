function makeEqual(words: string[]): boolean {
  if (!words.length) return false;
  const options = {};

  const test = words.map((el) => el.split(""));

  const items = test
    .map((category) => category)
    .reduce((prev, current) => [...prev, ...current])
    .map((e) => e);

  items.forEach((element) => (options[element] = (options[element] || 0) + 1));

  for (let key in options) {
    if (options[key] % words.length) return false;
  }

  return true;
};
