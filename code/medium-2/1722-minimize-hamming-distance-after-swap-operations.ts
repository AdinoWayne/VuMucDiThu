function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
    const size = source.length;
    const union = [];
    const sourceMap = new Map();
    const find = (node) => union[node] === node ? node : find(union[node]);
    let result = 0;

    for (let index = 0; index < size; index++) union[index] = index;
    for (const [a, b] of allowedSwaps) {
        const parentA = find(a);
        const parentB = find(b);
        
        if (parentA == parentB) continue;
        union[parentA] = parentB; 
    }
    for (let index = 0; index < size; index++) {
        const parent = find(index);
        const group = sourceMap.get(parent);
        const current = source[index];

        group 
            ? group.set(current, (group.get(current) ?? 0) + 1)
            : sourceMap.set(parent, new Map([[current, 1]]));
    }
    for (let index = 0; index < size; index++) {
        const group = sourceMap.get(find(index));
        const count = group.get(target[index]);

        count ? group.set(target[index], count - 1) : result += 1;
    }
    return result;
};
// TC O(nLogn)
// SC O(n)
