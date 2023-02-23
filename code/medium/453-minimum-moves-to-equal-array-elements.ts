function minMoves(nums: number[]): number {
  nums.sort((a, b) => b - a)

  let moves = 0

  let index = 1
  while (index < nums.length) {
    moves += (nums[index - 1] - nums[index]) * index
    ++index
  }

  return moves
};

// sum(array) - n * minimum
