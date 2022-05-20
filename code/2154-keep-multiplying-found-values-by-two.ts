function findFinalValue(nums: number[], original: number): number {
    while (true) {
      if (nums.indexOf(original) === -1) break;
      original *= 2;
    }
    return original;
};
