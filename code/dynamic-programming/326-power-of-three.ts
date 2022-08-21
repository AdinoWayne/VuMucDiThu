function isPowerOfThree(n: number): boolean {
    let rest = n;
    
    while (rest > 3) {
        rest = rest / 3;
    }
    
    return rest === 3 || rest === 1;
};
