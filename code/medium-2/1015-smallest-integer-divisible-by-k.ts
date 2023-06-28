function smallestRepunitDivByK(k: number): number {
    let count = 1
    let start = 1
    let set = new Set()
    while (start) {
        let r = start % k
        if ( r === 0 ) {
            break
        }
        if ( set.has(r) === true ) {
            return -1
        } else {
            set.add(r)
            start = r * 10 + 1
            count++
        }
        
    }
    return count
};
