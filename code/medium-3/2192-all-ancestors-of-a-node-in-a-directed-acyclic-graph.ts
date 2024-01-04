function getAncestors(n: number, edges: number[][]): any[][] {
    const inEdges = Array.from({ length: n }, () => new Set());
  const outEdges = Array.from({ length: n }, () => []);
  // init information
  for (const [from, to] of edges) {
    inEdges[to].add(from);
    outEdges[from].push(to);
  }
  for (let i = 0; i < n; ++i) {
	// start dfs from each node as the root
    dfs(inEdges, outEdges, i, i, new Uint8Array(n));
  }
  return inEdges.map(set => Array.from(set).sort((a, b) => Number(a) - Number(b)));
};

const dfs = (inEdges, outEdges, originValue, curValue, finished) => {
  if (finished[curValue]) return; // avoid repeat calculation
  finished[curValue] = 1;
  for (const out of outEdges[curValue]) {
    inEdges[out].add(originValue);
    dfs(inEdges, outEdges, originValue, out, finished); // traverse tree
  }
};
