function groupThePeople(groupSizes: number[]): number[][] {
    if (!groupSizes.length) return [];

    const result = [];
    const map = new Map();

    for (let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];

        if (!map.get(groupSize)) map.set(groupSize, []);
        map.get(groupSize).push(i);

        if (map.get(groupSize).length === groupSize) {
            result.push(map.get(groupSize));
            map.delete(groupSize);
        }
    }

    return result;
};
// TC O(n)
// SC O(n)
