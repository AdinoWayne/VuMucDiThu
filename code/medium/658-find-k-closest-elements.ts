function findClosestElements(arr: number[], k: number, x: number): number[] {
    //-------- Main idea behind the binary search algorithm ----------//
    // 1) res will be a consecutive subarray of k size
    // 2) say if we need to pick 4 elems, now we r looking at 5 elem n1, n2, n3, n4, n5
    // we need to compare two ends: diff(x, n1) and diff(x, n5), 
    // the number with bigger diff on the end will be eleminated
    //----------------------------------------------------------------//
    // lo and hi: range of all possible start of subarray with size k + 1, so we could compare both ends
    let low = 0, hi = arr.length -k;
    while(low <hi) {
        let mid = Math.floor((low+hi)/2);
        // for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
        if(x-arr[mid] > arr[mid+k]-x) {
            low = mid+1; // arr[mid] is the one further away from x, eliminate range[lo, mid]
        } else {
            hi = mid; // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, elimiate them
        }
    }
    return arr.slice(low, low+k);
};
