function kthFactor(n: number, k: number): number {
    for(let i = 1; i <= n; i++) {
        if((n % i) === 0) {
            k--
        }
        if(k === 0) return i
    }
    return -1
};
// TC O(n)
// SC O(1)
