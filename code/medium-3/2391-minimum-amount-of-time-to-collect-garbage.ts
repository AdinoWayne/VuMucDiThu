function garbageCollection(garbage: string[], travel: number[]): number {
    let travelTime = 0
    garbage = garbage.reverse()
    
    for (const type of ['G', 'P', 'M']) {
        const lastHouseWithGarbage = garbage.findIndex(house => house.includes(type))
        
        if (lastHouseWithGarbage === -1) {
        continue
        }

        travelTime += travel.slice(0, garbage.length - lastHouseWithGarbage - 1).reduce((acc, num) => acc + num, 0)
    }

    return garbage.join('').length + travelTime
};
// time complexity: O(n * m)
// space complexity: O(n)
