function maxMoves(grid: number[][]): number {
const m = grid.length

  const q = []
  const C = 0
  for (let R = 0; R < m; R++) {
    q.push([R, C, 0])
  }

  let max = 0
  const set = new Set()
  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const [R, C, mo] = q.shift()
      for (const [dx, dy] of [[-1, 1], [0, 1], [1, 1]]) {
        const nR = R + dx // new Row
        const nC = C + dy // new Col on right
        if (grid[nR]?.[nC] > grid[R][C]) {
          if (set.has(nR + ',' + nC)) continue // Avoid TLE
          set.add(nR + ',' + nC)

          q.push([nR, nC, mo + 1])
          max = Math.max(max, mo + 1)
        }
      }
    }
  }

  return max
};
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
