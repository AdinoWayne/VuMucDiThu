function maximumScoreAfterOperations(edges: number[][], values: number[]): number {
    let n = values.length, graph = Array(n).fill(0).map(() => []);
    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    let totalSum = values.reduce((sum, value) => sum + value);
    return totalSum - dfs(0, -1);
    
    function dfs(node, parent) { 
        if (graph[node].length === 1 && graph[node][0] === parent) {
        return values[node]; 
        }

        let sum = 0;
        for (let child of graph[node]) {
        if (child === parent) continue;
        sum += dfs(child, node);
        }
        return Math.min(values[node], sum);
    }
};
