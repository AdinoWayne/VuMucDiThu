function findClosestElements(arr: number[], k: number, x: number): number[] {
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

// Assume A[mid] ~ A[mid + k] is sliding window

// case 1: x - A[mid] < A[mid + k] - x, need to move window go left
// -------x----A[mid]-----------------A[mid + k]----------

// case 2: x - A[mid] < A[mid + k] - x, need to move window go left again
// -------A[mid]----x-----------------A[mid + k]----------

// case 3: x - A[mid] > A[mid + k] - x, need to move window go right
// -------A[mid]------------------x---A[mid + k]----------

// case 4: x - A[mid] > A[mid + k] - x, need to move window go right
// -------A[mid]---------------------A[mid + k]----x------

// Time O(log(N - K)) to binary research and find result
// Space O(K) to create the returned list.
