function minCostToMoveChips(position: number[]): number {
    let count = [0, 0];

    for (let i = 0; i < position.length; i++)
      ++count[position[i] % 2];

    return Math.min(count[0], count[1]);
};
