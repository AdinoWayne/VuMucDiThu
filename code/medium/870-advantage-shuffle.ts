function advantageCount(A: number[], B: number[]): number[] {
    const mapB = B.map((n, i) => [n, i]);
    const len = A.length;
    const output = [];
    const useless = []
    
    A.sort((a, b) => a - b);
    mapB.sort((a, b) => a[0] - b[0]);
    
    let currB = 0;
    
    for(let i = 0; i < len; i++) {
        const [numB, idxB] = mapB[currB];
        
        if(numB >= A[i]) useless.push(A[i]);
        else {
            output[idxB] = A[i];
            currB++;
        }
    }
    
    for(let i = 0; i < len; i++) {
        if(output[i] === undefined) {
            output[i] = useless.pop();
        }
    }
    return output;
};

// Time complexity: O(nlog
// Space complexity: O(n)
