function longestOnes(A: number[], K: number): number {
    let longest = 0;
    let zeroCount = 0;
    let start = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) zeroCount++;

        if (zeroCount > K) {
            if (A[start] === 0) zeroCount--;
            start++;
        }
        
        longest = Math.max(longest, i - start + 1);
    }
    
    return longest;
};
