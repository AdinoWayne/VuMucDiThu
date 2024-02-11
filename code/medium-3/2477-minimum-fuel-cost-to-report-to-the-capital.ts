function minimumFuelCost(roads: number[][], seats: number): number {
    const adjList = createAdjacencyList(roads);
    let ans = 0

    const dfs = (curNode, preNode) => {
        let people = 1
        for(let child of adjList[curNode]){ 
            if(child !== preNode){
                people += dfs(child, curNode)
            }
        }
        if(curNode) 
            ans += Math.ceil(people/seats)

        return people
    }
    dfs(0, -1)

    return ans
};


const createAdjacencyList = (edges) => {
    const N = edges.length
    const adjList = Array(N+1).fill(null).map(() => []);

    // Add the edges to the adjacency list
    for(const edge of edges){
        const [node1, node2] = edge;
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    }
    return adjList;
}
