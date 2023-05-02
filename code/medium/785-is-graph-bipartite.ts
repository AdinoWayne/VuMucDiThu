function isBipartite(graph: number[][]): boolean {
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!dfs(graph, colors, u, 0)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, colors, u, color) => {
  if (!colors.has(u)) {
    colors.set(u, color);

    for (const v of graph[u]) {
      if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
        return false;
      }
    }
  }

  return true;
};

// trying to use two colors to color the graph
// If it hasn't been colored, use a color to color it. Then use the other color to color all its adjacent nodes (DFS).
// If it has been colored, check if the current color is the same as the color that is going to be used to color i
// Time complexity: O(e*n) e is edges, n is length array
// Space complexity: O(n)
