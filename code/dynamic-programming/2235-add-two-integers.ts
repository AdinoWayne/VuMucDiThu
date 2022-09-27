function sum(num1: number, num2: number): number {
    while (num2) {
        // carry now contains common set bits of num1 and num2
        let carry = num1 & num2;
        // Sum of bits of num1 and num2 where at least one of the bits is not set
        num1 = num1 ^ num2;
        // Carry is shifted by one so that adding it to num1 gives the required sum
        num2 = carry << 1;
    }
    return num1;
};
