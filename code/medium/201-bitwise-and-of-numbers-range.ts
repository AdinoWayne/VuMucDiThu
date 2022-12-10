function rangeBitwiseAnd(left: number, right: number): number {
    // number of shifts we had to make
    let i = 0;
	
    // go until m and n are equal
    while (left !== right) {
        // right shift both m and n
        left >>= 1;
        right >>= 1;
        // that's 1 more shift
        i++;
    }
	
    // pad 0's on right of m by right shifting by i
    return (left <<= i);
};
