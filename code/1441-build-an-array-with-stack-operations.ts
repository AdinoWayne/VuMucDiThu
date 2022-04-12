function buildArray(target: number[], n: number): string[] {
  let arr = [];
  for (let i = 1; i <= target[target.length - 1]; i++) {
    arr.push("Push");
    if (!target.includes(i)) arr.push("Pop");
  }
  return arr;
};
