function countOperations(num1: number, num2: number): number {
    if (num2 === 0) return 0;                       // done
    if (num1 < num2) countOperations(num2, num1);   // reverse if num1 is small
    return (
        Math.trunc(num1 / num2) +                   // quotient (equals repeated subtraction amount)
        countOperations(num2, num1 % num2)          // call smaller, remainder
    );
};
