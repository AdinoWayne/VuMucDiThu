function countHighestScoreNodes(parents: number[]): number {
    let n = parents.length;
  let g = {};
  for (let p = -1; p < n; p++) g[p] = [];
  parents.forEach((p, c) => g[p].push(c));
  let size = {};
  for (let c = 0; c < n; c++) size[c] = 1;
  size[0] = 0;
  let maxprod = -Infinity;
  let maxprodcount = 0;
  function dfs(p) {
    let prod = 1;
    for (let c of g[p]) {
      dfs(c);
      size[p] += size[c];
      prod *= size[c];
    }
    prod *= n - size[p];
    if (prod > maxprod) {
      maxprod = prod;
      maxprodcount = 1;
    } else if (prod === maxprod) {
      maxprodcount++;
    }
  }
  dfs(0);
  return maxprodcount;
};
// TC O(n2)
// SC O(n)
// - The score of node 0 is: 3 * 1 = 3
// - The score of node 1 is: 4 = 4
// - The score of node 2 is: 1 * 1 * 2 = 2
// - The score of node 3 is: 4 = 4
// - The score of node 4 is: 4 = 4
