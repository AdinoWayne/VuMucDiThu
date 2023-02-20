function eraseOverlapIntervals(intervals: number[][]): number {
	// sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove;
};

// The time complexity of the eraseOverlapIntervals function is O(n log n), where n is the number of intervals in the input array.
// This is because the function first sorts the intervals based on their finish times, which takes O(n log n) time,
// and then it loops over the intervals once, which takes O(n) time. The space complexity of the function is O(1
