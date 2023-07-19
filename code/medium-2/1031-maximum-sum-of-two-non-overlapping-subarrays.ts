function maxSumTwoNoOverlap(A: number[], L: number, M: number): number {
    let prefixSum = []
    let result = 0
    
    for (let i=0; i<=A.length - 1; i++) {
        if (prefixSum.length == 0) {
            prefixSum.push(A[i])
        } else {
            prefixSum.push(A[i] + prefixSum[i - 1])
        }
    }
    /*
    Add a zero to first of prefix sum to conveniently calculate first appeared prefix sum
    For example: nums = [1,2,3,4,5,6,7], L=3, M=2
    normal prefix sum:  [1,3,6,10,15,21,28]
    If we want to calculate L subarray 1+2+3=6 
    According to the algorithm is: prefixSum[i - M] - prefixSum[i - M - L] which will be 10-1=9 which is incorrect
    But if we add 0 to prefix sum:  [0,1,3,6,10,15,21,28], it'll be 6-0 = 6
    */
    prefixSum.unshift(0)
    
    let lMax = 0
    
    // 1. Maintain sliding window, L subarray before M subarray, it is guaranteed that two subarray won't overlap
    for (let i=L+M; i<= prefixSum.length -1; i++) {
        // 2. Calculate L & M subarray sum
        const rangeLSum = prefixSum[i - M] - prefixSum[i - M - L]
        const rangeMSum = prefixSum[i] - prefixSum[i - M]
        
        // 3. Maintain current maxiumn of L sub-array in order to maximize the result the M sub-array
        lMax = Math.max(lMax, rangeLSum)
        result = Math.max(result, lMax + rangeMSum)
    }
    
    // Same as previous, just M sub-array appear before L subarray
    let mMax = 0 
    for (let i=L+M; i<= prefixSum.length -1; i++) {
        const rangeMSum = prefixSum[i - L] - prefixSum[i - M - L]
        const rangeLSum = prefixSum[i] - prefixSum[i - L]
        mMax = Math.max(mMax, rangeMSum)
        result = Math.max(result, mMax + rangeLSum)
    }
    
    return result
};
// TC O(n)
// SC O(1)
