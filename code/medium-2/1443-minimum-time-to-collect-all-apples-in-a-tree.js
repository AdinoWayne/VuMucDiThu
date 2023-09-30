function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    const parentMap = new Map();
    let answer = 0;
    for (let i = 0; i < edges.length; i++) {
        parentMap.set(edges[i][1], edges[i][0]);
    }
    for (let i = 0; i < hasApple.length; i++) {
        if (hasApple[i]) {
            let pointer = i;
            while (pointer !== 0) {
                const parent = parentMap.get(pointer);
                answer += 2;
                if (hasApple[parent]) {
                    break;
                }
                hasApple[parent] = true;
                pointer = parent;
            }
        }
    }
    return answer;
};
// TC O(n)
// SC O(n)
