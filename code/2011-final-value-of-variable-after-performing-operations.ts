function finalValueAfterOperations(operations: string[]): number {
    let res = 0;
    for (let s of operations) {
        if (s.charAt(1) == '-') {
            res--    
        } else {
            res++
        }
    }
    return res;
};
