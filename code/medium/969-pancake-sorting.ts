function pancakeSort(A: number[]): number[] {
    const n = A.length;

    const res = [];
    
    for (let i = n; i >= 1; i--) {
        const index = findIndex(i);
        if (index == i - 1) continue;
        flip(index);
        res.push(index + 1);
        flip(i - 1);
        res.push(i);
    }
    
    return res;

    function findIndex(num) {
        
        for (let i = 0; i < n; i++) {
            if (A[i] == num) return i;
        }
    }
    
    
    function flip(index) {
        let left = 0;
        let right = index;
        
        while (left < right) {
            const temp = A[left];
            A[left] = A[right];
            A[right] = temp;
            left++;
            right--;
        }
    }
};
