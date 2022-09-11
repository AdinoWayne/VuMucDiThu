function bitwiseComplement(N: number): number {
	// If N is 0 or 1 return the opposite.
    if (N === 0 || N === 1) {
        return (N ^ 1);
    }
	// Set mask to highest positive number.
    var mask = 1 << 30;
	// As long as mask and N is 0 and mask is greater than zero,
	// shift the mask 1 to the right.
    while ((mask & N) === 0 && mask > 0) {
        mask >>>= 1;
    }
	// Once the first 1 in N is encountered,
	// start flipping bits of N.
    while(mask > 0) {
        N ^= mask;
        mask >>>= 1;
    }
    return N;
};
