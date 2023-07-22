function gardenNoAdj(n: number, paths: number[][]): number[] {
    const gardens = new Array(n);
    const adjList = [...new Array(n)].map(() => []);
    
    // Create adjancey list
    for (const [from, to] of paths) {
        adjList[from - 1].push(to - 1);
        adjList[to - 1].push(from - 1);
    }
    
    for (let i = 0; i < gardens.length; i++) {
        const neighborValues = {};
        const tos = adjList[i];
        
        for (const to of tos) {
            const neighborValue = gardens[to];
            
            if (neighborValue) {
                neighborValues[neighborValue] = true;
            }
        }

        for (let val = 1; val <= 4; val++) {
            if (!neighborValues[val]) {
                gardens[i] = val;
                break;
            }
        }
    }
    
    return gardens;
};
// TC O(n)
// SC O(n)
