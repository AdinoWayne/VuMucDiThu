function numberOfSteps(num: number): number {
  var count = 0;
  while (num !== 0) {
    num % 2 === 0 ? ((num = num / 2), count++) : (num--, count++);
  }
  return count;
};
