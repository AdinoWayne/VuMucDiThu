function kLengthApart(nums: number[], k: number): boolean {
  let onesPositions = [];
  let results = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
          onesPositions.push(i);
        }
      }
    const largestDistance =
        Math.abs(onesPositions[0] - onesPositions[onesPositions.length - 1]) - 1;

      for (let i = 0; i < onesPositions.length - 1; i++) {
        let currentDistance = Math.abs(onesPositions[i] - onesPositions[i + 1]) - 1;
        if (largestDistance && currentDistance >= k) {
          results.push(true);
        } else {
          results.push(false);
        }
      }
      return results.every((val) => val === true);
};
