// example: 10011.
// Reverse of this number = 01100.
// It's equal: 100000 - 10011 - 1.

function findComplement(num: number): number {
    let d = 2;
    while (d <= num) {
        d *= 2;
    }    
    return d - num - 1;
};
