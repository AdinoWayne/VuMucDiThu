function maximumScore(x: number, y: number, z: number): number {
  [x, y, z] = [x, y, z].sort((a, b) => a - b);

  if ((x + y) <= z) {
    return x + y
  }
  return Math.trunc((x + y + z) / 2)
};
