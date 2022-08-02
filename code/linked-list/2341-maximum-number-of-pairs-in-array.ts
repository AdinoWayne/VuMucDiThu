function numberOfPairs(nums: number[]): number[] {
    let numsMap = new Map()
    let pairCount = 0;
    let leftover = 0

    //Populating numsMap
    nums.forEach(num => {
        if (numsMap.get(num) === undefined) {
            numsMap.set(num, 1)
        } else {
            numsMap.set(num, numsMap.get(num) + 1)
        }
    })

    //Traversing numsMap
    for (let [num, count] of numsMap) {
        if (count % 2 === 0) {
            pairCount += count / 2
        } else {
            pairCount += Math.trunc(count / 2)
            leftover++
        }
    }

    return [pairCount, leftover]
};
