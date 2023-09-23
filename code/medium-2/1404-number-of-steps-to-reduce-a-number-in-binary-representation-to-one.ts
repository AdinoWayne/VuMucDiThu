function numSteps(s: string): number {
    let i = 0, n = BigInt("0b"+s);
    
    while(n!=1n){
        n = n%2n==1n ? n+1n : n/2n;
        i++;
    }
    
    return i;
};
// TC O(logn)
// SC O(1)
