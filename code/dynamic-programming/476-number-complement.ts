function findComplement(num: number): number {
    let d = 2;
    while (d <= num) {
        d *= 2;
    }    
    return d - num - 1;
};
