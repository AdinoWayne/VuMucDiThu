function countRestrictedPaths(n: number, edges: number[][]): number {
    const adjList = new Array(n + 1).fill(null).map(() => new Array(0));
    for (const [node1, node2, weight] of edges) {
        adjList[node1].push([node2, weight]);
        adjList[node2].push([node1, weight]);
    }
    const nodeToShortestPathDistance = {}
    const heap = new Heap();
    heap.push([n, 0])
    let numNodeSeen = 0;
    while (numNodeSeen < n) {
        const [node, culmativeWeight] = heap.pop();
        if (nodeToShortestPathDistance.hasOwnProperty(node)) {
            continue;
        }
        nodeToShortestPathDistance[node] = culmativeWeight;
        numNodeSeen++;
        for (const [neighbor, edgeWeight] of adjList[node]) {
            if (nodeToShortestPathDistance.hasOwnProperty(neighbor)) {
                continue;
            }
            heap.push([neighbor, edgeWeight + culmativeWeight]);
        }
    }
    const nodeToNumPaths = {};
    const dfs = (node) => {
        if (node === n) return 1;
        if (nodeToNumPaths.hasOwnProperty(node)) {
            return nodeToNumPaths[node];
        }
        let count = 0;
        for (const [neighbor, weight] of adjList[node]) {
            if (nodeToShortestPathDistance[node] > nodeToShortestPathDistance[neighbor]) {
                count += dfs(neighbor);
            }
        }
        return nodeToNumPaths[node] = count % 1000000007;
    }
    return dfs(1);
};

class Heap {
    store: any
    constructor() {
        this.store = [];
    }
    peak() {
        return this.store[0];
    }
    size() {
        return this.store.length;
    }
    pop() {
        if (this.store.length < 2) {
            return this.store.pop();
        }
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }
    push(val) {
        this.store.push(val);
        this.heapifyUp(this.store.length - 1);
    }
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }
    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1,2].map((x) => parent * 2 + x).filter((x) => x < this.size());
            if (this.shouldSwap(child2, child)) {
                child = child2
            }
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }
    shouldSwap(child, parent) {
        return child && this.store[child][1] < this.store[parent][1];
    }
}
// TC O(n log n)
// SC O(n)
