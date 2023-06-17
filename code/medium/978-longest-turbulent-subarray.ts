function maxTurbulenceSize(A: number[]): number {
    let oddTurb = 1;  /* turbulent if A[k] < A[k+1] when k is even, and A[k] < A[k+1] when k is even */
    let evenTurb = 1; /* turbulent if A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd */
    let maxLen = 1;
    
    for (let k = 0; k < A.length - 1; k++) {
        if (k % 2 == 1) { // when k is odd
            oddTurb = (A[k] > A[k + 1]) ? oddTurb + 1 : 1;
            evenTurb = (A[k] < A[k + 1]) ? evenTurb + 1 : 1;
        }
        else { // when k is even
            evenTurb = (A[k] > A[k + 1]) ? evenTurb + 1 : 1;
            oddTurb = (A[k] < A[k + 1]) ? oddTurb + 1 : 1;
        }
        
        maxLen = Math.max(maxLen, oddTurb, evenTurb);
    }
    
    return maxLen;
};
