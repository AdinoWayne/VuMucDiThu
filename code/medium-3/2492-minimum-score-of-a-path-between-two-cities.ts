function minScore(n: number, roads: number[][]): number {
    const graph = new Array(n + 1).fill(null).map(() => []);
    const visited = new Set([]);
    for (const [v1, v2, distance] of roads) {
        graph[v1].push([v2, distance]);
        graph[v2].push([v1, distance]);
    }
    const queue = [1];
    visited.add(1);
    let ans = Infinity;
    while (queue.length > 0) {
        const node = queue.shift();
        for (const [next, distance] of graph[node]) {
        ans = Math.min(ans, distance);
        if (visited.has(next)) continue;

        visited.add(next);
        queue.push(next);
        }
    }
    return ans;
};
// The minScore function has a time complexity of O(V + E) in the worst case, making it efficient for various graph sizes.
// The space complexity is also O(V + E), indicating moderate memory usage for storing the graph representation and visited nodes.
