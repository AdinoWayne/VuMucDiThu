function countCompleteComponents(n: number, edges: number[][]): number {
const list = new Array(n).fill(null).map(() => []);
  for (const [a, b] of edges) {
    list[a].push(b);
    list[b].push(a);
  }

  const visitedNodes = new Set;
  let componentCounts = 0;

  for (let node = 0; node < n; node++) {
    if (visitedNodes.has(node)) continue;

    const queue = [node];
    let edgeCounts = 0;
    let nodeCounts = 0;

    while (queue.length) {
      const node = queue.shift();
      if (visitedNodes.has(node)) continue;
      visitedNodes.add(node);
      nodeCounts++;

      for (const adjacentNode of list[node]) {
        if (visitedNodes.has(adjacentNode)) continue;

        queue.push(adjacentNode);
        edgeCounts++;
      }
    }

    const correctEdgeCounts = nodeCounts * (nodeCounts - 1) / 2;
    if (edgeCounts === correctEdgeCounts) componentCounts++;
  }

  return componentCounts;
// };
// Time complexity: O(n^2) in the worst case, O(n * d) on average (depending on graph density)
// Space complexity: O(n) in the worst case
