function isIdealPermutation(A: number[]): boolean {
  for (let i = 0; i < A.length; ++i) {
    const tmp = A[i] - i;
    if (tmp > 1 || tmp < -1) return false;
  }
  return true;
};

// permutation
// local inversions: nums[i] > nums[i+1]
// global inversions: nums[i] > nums[j]

// Time complexity: O(n)
// Space complexity: O(1)
