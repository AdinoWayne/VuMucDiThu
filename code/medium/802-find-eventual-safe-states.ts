function eventualSafeNodes(graph: number[][]): number[] {
    let results = [];
    let visited = {};
    for(let i = 0; i < graph.length; i++) {        
        if (isNodeSafe(graph, i, visited)) {
            results.push(i);
        }
    }
    return results.sort((a, b) => a - b);
};

function isNodeSafe(graph: number[][], node: number, visited: any) {
    if (visited[node] === true) {
        return false;
    }    
    if (visited[node] === "safe") {
        return true;
    }
    
    visited[node] = true;
    for(let i = 0; i < graph[node].length; i++) {        
        if(!isNodeSafe(graph, graph[node][i], visited)) {
            return false;
        }        
    }
    visited[node] = "safe";   
    return true;
}

// Time complexity: O(2n)
// Space complexity: O(n)
