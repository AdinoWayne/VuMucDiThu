function getStrongest(arr: number[], k: number): number[] {
    const n = arr.length;
    
    arr.sort((a, b) => a - b);
    
    let left = 0;
    let right = n - 1;
    
    const idx = Math.floor((n - 1) / 2);
    const median = arr[idx];
    
    const res = [];
    
    while (k > 0) {
        const leftNum = arr[left];
        const rightNum = arr[right];
        
        const leftStr = Math.abs(leftNum - median);
        const rightStr = Math.abs(rightNum - median);
        
        if ((leftStr > rightStr) || (leftStr === rightStr && leftNum > rightNum)) {
            res.push(leftNum);
            left++;
        }
        else {
            res.push(rightNum);
            right--;
        }
        k--;
    }
    
    return res;
};
// TC O(nLogn)
// SC O(n)
