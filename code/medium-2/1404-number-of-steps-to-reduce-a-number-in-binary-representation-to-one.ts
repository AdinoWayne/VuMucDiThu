function numSteps(s: string): number {
    let i = 0, n = BigInt("0b"+s);
    
    while(n!=1n){
        n = n%2n==1n ? n+1n : n/2n;
        i++;
    }
    
    return i;
};
// Since the Number primitive on Javascript only supports numbers below 2^53 - 1
// it's neccesary to use the BigInt notation when dealing with numbers.
// Example:
// 123 --> 123n.
// TC O(logn)
// SC O(1)
