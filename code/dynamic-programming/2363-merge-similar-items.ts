function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let vwMap = new Map() //vw abbreviates value weight

    for (let [value, weight] of items1.concat(items2)) {
        if (!vwMap.has(value)) {
            vwMap.set(value, weight)
        } else {
            vwMap.set(value, vwMap.get(value) + weight)
        }
    }

    return Array.from(vwMap.entries()).sort((a,b) => a[0] - b[0])
};
