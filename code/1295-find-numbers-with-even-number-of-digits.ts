function findNumbers(nums: number[]): number {
  let count = 0;
  for (let num of nums) {
    let digit = 0;

    while (num > 0) {
      digit++;
      num = Math.floor(num / 10);
    }

    if (digit % 2 === 0) count++;
  }

  return count;
};
