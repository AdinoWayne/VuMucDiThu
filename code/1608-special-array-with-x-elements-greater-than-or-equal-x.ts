function specialArray(nums: number[]): number {
  let max = Math.max(...nums);
  let luckyNum = -1;
  for (let i = 0; i <= max; i++) {
    let len = nums.filter((num) => num >= i).length;
    if (i === len) {
      luckyNum = i;
    }
  }
  return luckyNum;
};
