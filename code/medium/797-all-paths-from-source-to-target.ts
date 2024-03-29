function allPathsSourceTarget(graph: number[][]): number[][] {
    const target = graph.length - 1;
    const res = [];
    const DFS = (node,path) => {
        path.push(node);
		// if we've reached the target, we've found a path
        if(node === target) { 
            res.push(path);
            return;
        }
        for(let edge of graph[node]) {
            DFS(edge,[...path]);
        }
    }
    DFS(0,[]);
    return res;
};

// Time complexity: O(2^n)
// Space complexity: O(2^n)
