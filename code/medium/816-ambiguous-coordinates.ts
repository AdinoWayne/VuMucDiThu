function ambiguousCoordinates(s: string): string[] {
  const set = new Set<string>();
  const getCoordinate = str => {
    if (str.length === 1) return [str];
    const isStartZero = str.startsWith("0");
    const isEndZero = str.endsWith("0");
    if (isStartZero && isEndZero) return;
    if (isStartZero && !isEndZero) return [`0.${str.slice(1)}`];
    if (isEndZero) return [str];
    const dot = [];
    for (let index = 1; index < str.length; index++) {
      const reuslt = `${str.slice(0, index)}.${str.slice(index)}`;
      dot.push(reuslt);
    }
    return [str, ...dot];
  };
  s = s.slice(1, -1);
  for (let index = 0; index < s.length - 1; index++) {
    const x = getCoordinate(s.slice(0, index + 1));
    const y = getCoordinate(s.slice(index + 1));
    if (!x || !y) continue;
    x.forEach(valueX => {
      y.forEach(valueY => set.add(`(${valueX}, ${valueY})`));
    });
  }
  return [...set];
};

<!-- 
Time complexity: O(n)
Space complexity: O(n2)
-->
