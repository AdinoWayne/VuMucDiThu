function baseNeg2(n: number): string {
    if (n === 0) return "0";
    let currentLeft = n, pos = 0, prev = 0, ans = "";
    while (currentLeft > 0) {
        const currentBit = currentLeft % 2;
        const { bit, next } =  computeBit(currentBit, pos, prev);
        ans = bit + ans;
        prev = next;
        ++pos;
        currentLeft = Math.floor((currentLeft - currentBit) / 2);
    }
    if (prev > 0) return (pos % 2 ? '11' : '1') + ans;
    return ans;
};

const computeBit = (bit, pos, prev) => {
    if (pos % 2 === 1) {
        if (bit === 1 && prev === 1) return { bit: 0, next: 1 };
        if (bit === 1 && prev === 0) return { bit: 1, next: 1 };
        if (bit === 0 && prev === 1) return { bit: 1, next: 1 };
        if (bit === 0 && prev === 0) return { bit: 0, next: 0 };
    } else {
        if (bit === 1 && prev === 1) return { bit: 0, next: 1 };
        return { bit: bit + prev, next: 0 };
    }
}
// TC O(log n)
// SC O(log n)
