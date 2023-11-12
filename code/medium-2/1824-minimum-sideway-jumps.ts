function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length - 1
  let jumps = 0
  let cur = 2
  for (let i = 1; i < n; i++) {
    if (obstacles[i] != cur) continue
    jumps++ /* JUMPS ++ */
    if (obstacles[i - 1]) {
      cur = 3 - ((obstacles[i - 1] + cur) % 3) /* MAKE A JUMP IF ONLY 1 AVALIABLE */
      continue
    }
    while (i < n) {
      let rock = obstacles[i]
      if (rock != 0 && rock != cur) {
        cur = 3 - ((rock + cur) % 3) /* CHOOSE LONGEST BRICK-FREE LANE*/
        break
      }
      i++
    }
  }
  return jumps
};
