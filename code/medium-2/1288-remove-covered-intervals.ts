function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]))
    let count = 0, cur = 0
    for(let interval of intervals){
        if(cur < interval[1]){
            cur = interval[1]
            count++
        }
    }
    return count
};
// TC O(n)
// SC O(1)
