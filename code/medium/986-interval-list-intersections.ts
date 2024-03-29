function intervalIntersection(A: number[][], B: number[][]): number[][] {
    let Ai = 0, Bi = 0;
    let res = [];
    
    while (Ai < A.length && Bi < B.length) {
        let maxStart = Math.max(A[Ai][0], B[Bi][0]);
        let minEnd = Math.min(A[Ai][1], B[Bi][1]);
        
        if (maxStart <= minEnd) res.push([maxStart, minEnd]) // overlap found
        
        if (A[Ai][1] < B[Bi][1]) Ai++;
        else Bi++;
    }
    
    return res;
};

// Time complexity: O(m+n) where m and n are the number of intervals in A and B respectively.
// Space complexity: O(m+n) because of the result array
