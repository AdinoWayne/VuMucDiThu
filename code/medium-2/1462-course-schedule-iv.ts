function checkIfPrerequisite(n: number, prerequisites: number[][], queries: number[][]): boolean[] {
  let g = Array.from({ length: n }, () => new Array(n).fill(0))
  for (let [u, v] of prerequisites) {
    g[u][v] = 1
  }

  for (let mid = 0; mid < n; mid++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        if (g[u][mid] && g[mid][v]) {
          g[u][v] = 1
        }
      }
    }
  }

  let an = []
  for (let [u, v] of queries) {
    an.push(g[u][v])
  }
  return an
};
// TC O(n3)
// SC O(n2)
