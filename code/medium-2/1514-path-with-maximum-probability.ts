function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
    const p = Array(n).fill(0);
    const graph = p.reduce((m, _, i) => m.set(i, []), new Map());
    edges.forEach(([u, v], i) => {
        graph.get(u).push([v, succProb[i]]);
        graph.get(v).push([u, succProb[i]]);
    });
    
    const queue = [[start_node, 1]];
    p[start_node] = 1;
    
    for (let [node, currP] of queue) {   
        for (let [adj, nextP] of graph.get(node)) {
        if (currP * nextP > p[adj]) {
            p[adj] = currP * nextP;
            queue.push([adj, p[adj]]);
        }
        }
    }
    
    return p[end_node];
};
