function totalHammingDistance(A: number[]): number {
    const ones_arr = Array(32).fill(0); // 32 bits per int

    A.forEach((x) => {
        // can stop with x>0
        for (let i = 0; i < 32; i++) {
            ones_arr[i] += x & 1;
            x >>= 1;
        }
    });

    return ones_arr //
        .reduce((sum, ones) => sum + ones * (A.length - ones), 0); // ones * zeros
};
