function concatenatedBinary(n: number): number {
    let num = 0;
    
    for(let i = 1; i <= n; i++) {
        //OR num *= (1 << i.toString(2).length)
        num *= (2 ** i.toString(2).length) 
        num += i;
        num %= (10 ** 9 + 7)
    }
    return num;
};
// Time Complexity: O(n*log(n))
// Space Complexity: O(1)
