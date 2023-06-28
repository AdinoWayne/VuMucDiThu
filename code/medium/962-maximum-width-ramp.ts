function maxWidthRamp(nums: number[]): number {
  const n = nums.length;

  // Create an array of objects containing the number and its original index
  const numsWithIndices = nums.map((num, index) => ({ num, index }));

  // Sort the array in ascending order based on the numbers
  numsWithIndices.sort((a, b) => a.num - b.num);

  let result = 0;
  let minIndex = n;

  for (const { index } of numsWithIndices) {
    // Calculate the width of the ramp
    result = Math.max(result, index - minIndex);
    // Update the minimum index encountered so far
    minIndex = Math.min(minIndex, index);
  }

  return result;
}

// TC O(nlogn)
// SC O(n)
