function maximumEvenSplit(finalSum: number): any[] {
    if(finalSum % 2) return [];
    const set = new Set();
    let n = 2, sum = 0;
    while(sum < finalSum) {
        sum += n;
        set.add(n);
        n += 2;
    }
    set.delete(sum - finalSum);
    return [...set];
};
// TC O(Logn) 
// SC O(Logn)
