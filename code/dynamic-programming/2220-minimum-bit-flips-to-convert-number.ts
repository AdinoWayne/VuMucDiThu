function minBitFlips(start: number, goal: number): number {
    let countBits = 0;
    let n = start ^ goal;
    while(n>0){
        n = n & (n-1);
        countBits++;
    }
    return countBits;
};
