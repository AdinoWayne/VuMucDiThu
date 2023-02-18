function findRightInterval(intervals: number[][]): number[] {
    let res = [];
    let end = intervals.length;
    let map = new Map();
    let a = [];
    intervals.forEach((el, index) => {
        map.set(el[0], index);
        a.push(el[0]);
    });
    a.sort((a, b) => a - b);

    for (let i = 0; i < end; i++) {
        let value = search(a, 0, end -1, intervals[i][1]);
        if (value === undefined) {
            res.push(-1);
        } else {
            res.push(map.get(value));
        }
    }
    return res;
};

function search(arr, start, end, val) {
    let ans = undefined;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] >= val) {
            ans = arr[mid];
            end = mid - 1;
        } else {
            start = mid + 1;
        }        
    }

    return ans;
}
// Create an array of starting points where a[i] = starting point of interval i.
// Use a Map to keep track of index of each starting point (Each starting point is unique).
// Sort the array of starting points
// Then for each end point 'intervals[i][1]':
// perform binary search on array of starting points to get the minimum start point 'a' such that a >= intervals[i][1]
// if such a start point is found, add its index (use the Map to get its index) to result array, else add -1 to result array
